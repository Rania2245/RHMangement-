import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';
import { CalendrierEmp } from 'src/app/Classes/calendrier-emp';
import { CalandrierService } from 'src/app/Services/calandrier.service';

@Component({
  selector: 'app-performing-emp',
  templateUrl: './performing-emp.component.html',
  styleUrls: ['./performing-emp.component.css']
})
export class PerformingEmpComponent implements AfterViewInit{
  performanceData: number[] = [];
  calendrierEmp!: CalendrierEmp;
  constructor(private calandrierS: CalandrierService) {}
  objectifData = this.calendrierEmp.objectif;
  ngAfterViewInit(): void {
    this.calandrierS.getCalendrierEmpById(1).subscribe((data) => {
      this.calendrierEmp = data;
      this.configureChart();
    });
   
       }
  
    private configureChart(): void {
      const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Performance'],
          datasets: [
            {
              label: 'Performance',
              data: this.performanceData,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
            },
            {
              label: 'Objectif',
              data: [this.objectifData],
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  
}
