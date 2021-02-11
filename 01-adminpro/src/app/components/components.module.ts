import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreasingComponent } from './increasing/increasing.component';

import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';

import { ChartsModule } from 'ng2-charts';

const COMPONENTS = [
  IncreasingComponent,
  DoughnutComponent
]

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ComponentsModule { }
