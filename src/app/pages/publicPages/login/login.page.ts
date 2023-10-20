import { Component, OnInit } from '@angular/core';
import { AUTHENTICATED_ROUTES, AUTH_GOOGLE_LINK, PUBLIC_ROUTES } from '../../../utils/constants';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestcountriesService } from 'src/app/services/restcountries/restcountries.service';

interface Country {
  flag: string;
  name: string;
  idd: string;
}

@Component({
  selector: 'app-loginv2',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  AUTHENTICATED_ROUTES = AUTHENTICATED_ROUTES

  defaultCountry: Country = {
    name: 'default',
    flag: '',
    idd: '',
  };

  authenticated = true;
  selectedCountry: Country = this.defaultCountry
  phoneNumber = '';
  countries: Country[] = [];
  AUTH_GOOGLE_LINK = AUTH_GOOGLE_LINK;

  isMobile = window.innerWidth <= 768;

  constructor(private router: Router, private restcountriesService: RestcountriesService, private httpClient: HttpClient) {}

  async ngOnInit() {
    this.countries = await this.restcountriesService.getAllCountries()
  }

  handleCountryChange(event: any) {
    const selectedCountryName = event.target.value;
    const country = this.countries.find((c) => c.name === selectedCountryName);

    if (country) {
      this.selectedCountry = country;
      this.phoneNumber = country.idd;
    } else {
      this.selectedCountry = this.defaultCountry
      this.phoneNumber = '';
    }
  }

  continue() {
    // Lógica para continuar con el proceso de inicio de sesión aquí
  }
}
