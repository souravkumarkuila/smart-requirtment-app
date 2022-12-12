import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IChart } from 'src/app/shared/interfaces/chartInterface';
import { ChartService } from 'src/app/shared/services/chart.service';
import { FilterComponent } from '../filter/filter.component';

declare var google: any;

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  chartData!: IChart;
  constructor(
    private chartService: ChartService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    await this.initChartData();
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  async initChartData() {
    this.chartData = await this.chartService.getChartData();
    console.log(this.chartData);
    
  }

  drawChart() {
    console.log("drawing chart");
    const rejectionRatio = Number(this.chartData.rejectionRatio);
    const selectionRatio = Number(this.chartData.selectionRatio);
    var data = google.visualization.arrayToDataTable([
      ['Task', 'percentage'],
      ['Rejected ratio', rejectionRatio],
      ['Selected ratio', selectionRatio],


    ]);
    var options = {
      pieHole: .6,

      width: 600,
      height: 400,

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true
              }
            }
          }
        }

      }

    }
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }

  filterOption(){
    const modalRef = this.modalService.open(FilterComponent);
  }

}