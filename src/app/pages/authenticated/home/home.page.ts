import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AUTHENTICATED_ROUTES } from 'src/app/utils/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isMobile: boolean = window.innerWidth <= 768;

  constructor(private router: Router) { }

  ngOnInit() { }

  handlePickupLocation() {
    this.router.navigate([AUTHENTICATED_ROUTES.PLAN_YOUR_RIDE]);
  }

}
