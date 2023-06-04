import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
    Highcharts = Highcharts;
    chartOptions={}

    constructor(){
      this.chartOptions = {
        chart: {
          type: 'area'
      },
      title: {
          text: 'Yearly placement evaluations 2022-2023',
          align: 'center'
      },
      subtitle: {
          text: 'Luminar TechnoLab',
          align: 'center'
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Number of placements'
          }
      },
      xAxis:{
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      credits:{
        enabled:false
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      
      series: [{
          name: 'MERN',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214, 16312, 16315, 16412]
      }, {
          name: 'Python Django',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039, 5000, 4995, 5800]
  
      }, {
          name: 'Java spring',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913, 5000, 5002, 5500]
      }, {
          name: 'data science',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550, 2000, 2500, 3000]
  
      }, {
          name: 'software testing',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186, 2400, 2500, 2600]
      }]
      }
      HC_exporting(Highcharts)
    }
}
