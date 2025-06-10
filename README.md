# Network Storage Visualizer

A full-stack system dashboard to visualize real-time storage usage across mounted drives. Built using Angular (frontend), Node.js (backend), and Python (disk scanner).

## 💡 Features

- Live bar charts for used disk space
- Auto-refresh every 30s
- REST API between Angular and Python
- Uses `psutil` to detect all mounted drives and stats

## 🚀 Tech Stack

- Angular (Frontend)
- Node.js + Express (API)
- Python + psutil (Storage stats)

## 🛠️ Setup Instructions

```bash
# Python scanner
cd scanner

# Node API server
cd ../server
npm install
node server.js

# Angular frontend
cd ../frontend
npm install
ng serve
```