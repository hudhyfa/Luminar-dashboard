import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts;
  chartOptions={}

  constructor(){
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Average students admission',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits:{
      enabled: false
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Courses',
        colorByPoint: true,
        data: [{
            name: 'Mern',
            y: 40.67,
            sliced: true,
            selected: true
        }, {
            name: 'Python',
            y: 24.77
        },  {
            name: 'php',
            y: 14.86
        }, {
            name: 'software testing',
            y: 12.63
        }, {
            name: 'java',
            y: 11.53
        },  {
            name: 'golang',
            y: 11.40
        }]
    }]
    }
  }
}
