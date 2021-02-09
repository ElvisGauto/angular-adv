import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  // { path: '', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'dashboard', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot( routes ),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
