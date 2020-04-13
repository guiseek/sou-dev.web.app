import { SharedModule } from './../shared/shared.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScullyLibModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
