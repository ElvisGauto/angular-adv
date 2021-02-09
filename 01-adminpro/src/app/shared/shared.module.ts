import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

const COMPONENTS = [
  BreadcrumbsComponent,
  SidebarComponent,
  HeaderComponent,
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class SharedModule { }
