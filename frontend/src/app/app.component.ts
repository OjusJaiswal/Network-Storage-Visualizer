import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  diskData: any = [];
  chartLabels: string[] = [];
  chartData: any = [{ data: [], label: 'Used Space (%)' }];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
    setInterval(() => this.loadData(), 30000);
  }

  loadData() {
    this.http.get('http://localhost:3000/api/storage').subscribe((data: any) => {
      this.diskData = data;
      this.chartLabels = data.map((d: any) => d.mount);
      this.chartData = [{ data: data.map((d: any) => d.used_percent), label: 'Used Space (%)' }];
    });
  }
}