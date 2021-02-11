import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  sales = {
    title: 'Sales 1',
    doughnutChartLabels: [
      'Download Sales', 'In-Store Sales', 'Mail-Order Sales'  
    ],
    doughnutChartData: [350, 450, 100],
    colors: [
      { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
    ]
  };

  foods = {
    title: 'Comidas',
    doughnutChartLabels: [
      'Panchos', 'Milanesas', 'Asados'
    ],
    doughnutChartData: [400, 600, 568],
    colors: [{ backgroundColor: [ '#3D83EB', '#EB3D9E', '#6DEB3D' ] }]
  }

}
