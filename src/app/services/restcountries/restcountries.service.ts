import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../../../../../../backend/auth/src/domain/utils/interfacesAndTypes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestcountriesService {
  constructor(private httpClient: HttpClient) {}

  getAllCountries(): Promise<Country[]> {
    return new Promise((resolve, reject) => {
      try {
        this.httpClient
          .get<Country[]>('https://restcountries.com/v3.1/all')
          .pipe(
            map((countries) => {
              return countries.map((countryData: any) => {
                const country = {
                  flag: countryData.flag,
                  name: countryData.name.common,
                  idd: countryData.idd.root,
                };

                if (countryData.idd.suffixes) {
                  if (countryData.idd.suffixes[0]) {
                    country.idd += countryData.idd.suffixes[0];
                  }
                }

                return country;
              });
            })
          )
          .subscribe((data) => {
            resolve(data);
          });
      } catch (err) {
        reject(err);
      }
    });
  }
}
