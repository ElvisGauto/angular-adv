import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const COMPONENTS = [
  NopagefoundComponent,
  DashboardComponent,
  ProgressComponent,
  Grafica1Component,
  PagesComponent,
  PromisesComponent,
  AccountSettingsComponent,
  RxjsComponent,
]

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    COMPONENTS
  ]
})
export class PagesModule { }
