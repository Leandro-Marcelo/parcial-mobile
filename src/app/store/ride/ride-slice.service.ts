import { Injectable } from '@angular/core';
import {
  Car,
  DriverInfo,
  EstimatedRide,
  MarkerPosition,
  NewRideEventDto,
  RideInfo,
  RideRtkState,
  SelectedRide,
  WsMessage,
} from '../../../../../geo-l-react-ionic/src/utils/typesAndInterfaces';
import { CURRENT_USER_RESET } from '../../../../../../backend/auth/src/domain/constants/entities';
import {
  CAR_RESET,
  DRIVER_INFO_RESET,
  ESTIMATED_RIDE_RESET,
  MARKER_POSITION_RESET,
  RIDE_INFO_RESET,
  SELECTED_RIDE_RESET,
} from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class RideSliceService {
  storeRide: RideRtkState = {
    // DRIVER AND PASSENGER
    currentRide: {
      id: '',
      originLocation: '',
      destinationLocation: '',
      passenger: CURRENT_USER_RESET,
      status: '',
      travelMode: '',
    },
    markerPosition: MARKER_POSITION_RESET,

    formRide: {
      originLocation: {
        lat: 0,
        lng: 0,
        name: '',
      },
      destinationLocation: {
        lat: 0,
        lng: 0,
        name: '',
      },
    },
    isSettingOrigin: true,
    firstLoadingMap: true,
    // DRIVER
    prevCurrentRideDriver: ESTIMATED_RIDE_RESET,
    currentRideDriver: ESTIMATED_RIDE_RESET,
    ridesPending: [],
    selectedRide: SELECTED_RIDE_RESET,
    selectedRides: [],

    driverInfo: DRIVER_INFO_RESET,
    driverCar: CAR_RESET,
    rideInfo: RIDE_INFO_RESET,
  };

  constructor() {}

  setCurrentRideReducer(currentRide: NewRideEventDto) {
    this.storeRide.currentRide = currentRide;
  }

  setOriginMarkerPositionReducer(originMarkerPosition: MarkerPosition) {
    this.storeRide.markerPosition = originMarkerPosition;
  }

  setPrevCurrentRideDriverReducer(estimatedRide: EstimatedRide) {
    this.storeRide.prevCurrentRideDriver = estimatedRide;
  }

  setCurrentRideDriverReducer(estimatedRide: EstimatedRide) {
    this.storeRide.currentRideDriver = estimatedRide;
  }

  setRidesPendingReducer(ridesPending: NewRideEventDto[]) {
    this.storeRide.ridesPending = ridesPending;
  }

  setSelectedRidesReducer(selectedRides: NewRideEventDto[]) {
    this.storeRide.prevCurrentRideDriver = this.storeRide.currentRideDriver;
    this.storeRide.selectedRides = selectedRides;
  }

  setSelectedRideReducer(selectedRide: SelectedRide) {
    this.storeRide.selectedRide = selectedRide;
  }

  setDriverInfoReducer(driverInfo: DriverInfo) {
    this.storeRide.driverInfo = driverInfo;
  }

  setDriverCarReducer(driverCar: Car) {
    this.storeRide.driverCar = driverCar;
  }

  setRideInfoReducer(rideInfo: RideInfo) {
    this.storeRide.rideInfo = rideInfo;
  }

  addRideToRidesPendingReducer(wsMsg: WsMessage) {
    const newRide = wsMsg.data as NewRideEventDto;
    this.storeRide.ridesPending.push(newRide);
  }

  removeAcceptedRideAndUpdateSelectedRideReducer(wsMsg: WsMessage) {
    const newRide = wsMsg.data as NewRideEventDto;
    const updatedRidesPending = [
      ...this.storeRide.ridesPending.filter(
        (ridePending) => ridePending.id !== newRide.id
      ),
    ];

    if (this.storeRide.selectedRide.id === newRide.id) {
      this.storeRide.ridesPending = updatedRidesPending;
      this.storeRide.selectedRide = SELECTED_RIDE_RESET;
      this.storeRide.currentRideDriver = this.storeRide.prevCurrentRideDriver;
    } else {
      this.storeRide.ridesPending = updatedRidesPending;
    }
  }
}
