import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanYourRidePageRoutingModule } from './plan-your-ride-routing.module';

import { PlanYourRidePage } from './plan-your-ride.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanYourRidePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlanYourRidePage]
})
export class PlanYourRidePageModule {}
