import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AppSliceService } from 'src/app/store/app/app-slice.service';
import { RideSliceService } from 'src/app/store/ride/ride-slice.service';
import { AUTHENTICATED_ROUTES } from 'src/app/utils/constants';

@Component({
  selector: 'app-plan-your-ride',
  templateUrl: './plan-your-ride.page.html',
  styleUrls: ['./plan-your-ride.page.scss'],
})
export class PlanYourRidePage implements OnInit {

  constructor(private appSlice: AppSliceService, private rideSlice: RideSliceService) { }

  AUTHENTICATED_ROUTES = AUTHENTICATED_ROUTES;
  isMobile = this.appSlice.isMobile;

  isSettingOrigin = this.rideSlice.storeRide.isSettingOrigin
  firstLoadingMap = this.rideSlice.storeRide.firstLoadingMap
  originLocationName = this.rideSlice.storeRide.formRide.originLocation.name
  destinationLocationName = this.rideSlice.storeRide.formRide.destinationLocation.name

  ngOnInit() {
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    // this.store.dispatch(RideActions.setOriginMarkerPosition({
    //   lat: coordinates.coords.latitude,
    //   lng: coordinates.coords.longitude,
    // }));
  }

}
