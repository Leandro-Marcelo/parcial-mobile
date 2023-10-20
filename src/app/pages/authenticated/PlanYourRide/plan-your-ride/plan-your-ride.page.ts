import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AppSliceService } from 'src/app/store/app/app-slice.service';

@Component({
  selector: 'app-plan-your-ride',
  templateUrl: './plan-your-ride.page.html',
  styleUrls: ['./plan-your-ride.page.scss'],
})
export class PlanYourRidePage implements OnInit {

  constructor(private appSlice: AppSliceService) { }

  isMobile = this.appSlice.isMobile;

  ngOnInit() {
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
  }

}
