import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../api/api.service';
import { LoggerService } from '@ngx-toolkit/logger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = environment.apiUrl.concat('/country');

  constructor(private api: ApiService,
              private log: LoggerService) {
  }

  getCountries(): Observable<Country[]> {
    this.log.debug('Getting countries');
    return this.api.get(`${this.apiUrl}`, {}, {})
      .pipe(
        map((response: HttpResponse<any>) => {
          this.log.debug('Got countries', {response: response});
          return <Country[]>response.body;
        }));
  }

}
