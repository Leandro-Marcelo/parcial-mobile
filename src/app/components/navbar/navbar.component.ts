import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppSliceService } from 'src/app/store/app/app-slice.service';
import { AuthSliceService } from 'src/app/store/auth/auth-slice.service';
import { APP_NAME, PAGES_NAMES } from 'src/app/utils/constants';
import { PagesNamesType } from 'src/app/utils/typesAndInterfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  APP_NAME = APP_NAME

  PAGES_NAMES = PAGES_NAMES

  constructor(private storeDispatchApp: AppSliceService, private navController: NavController) { }

  authenticated = true;

  ngOnInit() {}

  storeAppCurrentPage = this.storeDispatchApp.currentPage

  handleChangePage(pageName: PagesNamesType) {
    this.storeDispatchApp.setCurrentPageReducer(pageName);
    this.navController.navigateForward(`/tabs/${pageName.toLowerCase()}`);
  }

}
