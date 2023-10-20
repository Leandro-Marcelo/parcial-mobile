import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanYourRidePage } from './plan-your-ride.page';

const routes: Routes = [
  {
    path: '',
    component: PlanYourRidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanYourRidePageRoutingModule {}
