import { Injectable } from '@angular/core';
import {
  PAGES_NAMES,
  SHOW_PLAN_YOUR_RIDE_COMPONENTS_RESET,
} from 'src/app/utils/constants';
import {
  PagesNamesType,
  ShowPlanYourRideComponents,
} from '../../../../../geo-l-react-ionic/src/utils/typesAndInterfaces';

@Injectable({
  providedIn: 'root',
})
export class AppSliceService {
  constructor() {}

  currentPage = PAGES_NAMES.HOME;
  showIonTabBar = true;
  showPlanYourRideComponents = SHOW_PLAN_YOUR_RIDE_COMPONENTS_RESET;
  isMobile = window.innerWidth < 1280;

  setCurrentPageReducer(currentPage: PagesNamesType) {
    this.currentPage = currentPage;
  }

  setShowIonTabBarReducer(showIonTabBar: boolean) {
    this.showIonTabBar = showIonTabBar;
  }

  setShowPlanYourRideComponentsReducer(
    showPlanYourRideComponents: ShowPlanYourRideComponents
  ) {
    this.showPlanYourRideComponents = showPlanYourRideComponents;
  }
}
