import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss'],
})
export class BackBtnComponent {
  @Input() routerLink: string = '/';
  @Input() width: string = '45px';
  @Input() height: string = '45px';
  @Input() backgroundColor: string = '#eaeaea';

  constructor(private router: Router) {}

  handleRouterLink() {
    this.router.navigate([this.routerLink]);
  }
}
