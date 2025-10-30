import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration,Chart,registerables } from 'chart.js';

Chart.register(...registerables);



@Component({
  selector: 'app-grafic',
  imports: [BaseChartDirective],
  templateUrl: './grafic.html',
  styleUrl: './grafic.scss',
})

export class Grafic {
  chartData: ChartConfiguration['data'] = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [
      {
        label: 'Ventas',
        data: [120, 150, 180, 90, 200],
        backgroundColor: '#1976d2',
      }
    ]
  };

  chartOptions: ChartConfiguration['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true, position: 'top' }
  },
  scales: {
    x: { grid: { display: false } },
    y: { beginAtZero: true }
  }
};
}
