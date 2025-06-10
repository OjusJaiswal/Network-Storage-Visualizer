import psutil
import json

def get_storage_info():
    drives = []
    for part in psutil.disk_partitions(all=False):
        try:
            usage = psutil.disk_usage(part.mountpoint)
            drives.append({
                "mount": part.mountpoint,
                "total": usage.total,
                "used": usage.used,
                "free": usage.free,
                "used_percent": round(usage.percent, 2)
            })
        except PermissionError:
            continue
    return drives

if __name__ == '__main__':
    print(json.dumps(get_storage_info()))