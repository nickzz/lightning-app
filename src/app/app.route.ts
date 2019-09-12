import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

export const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, {

      anchorScrolling: 'enabled',
      enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRouteModule { }
