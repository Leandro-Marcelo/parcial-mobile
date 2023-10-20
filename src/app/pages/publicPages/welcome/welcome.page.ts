import { Component, OnInit } from '@angular/core';
import { APP_NAME, PUBLIC_ROUTES } from 'src/app/utils/constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  APP_NAME = APP_NAME;
  PUBLIC_ROUTES = PUBLIC_ROUTES;

  constructor() {}

  ngOnInit() {}
}
