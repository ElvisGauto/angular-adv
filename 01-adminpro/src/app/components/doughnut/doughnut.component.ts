import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {

  @Input() title: string;
  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet;
  @Input() colors:  Color[];


  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100],
  // ];

  // public colors: Color[] = [
  //   { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  // ];

}
