import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../api/api.service';
import { LoggerService } from '@ngx-toolkit/logger';
import { PageableParams, PageSlice } from '../api/api.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TesterStatisticService {

  private apiUrl = environment.apiUrl.concat('/tester/statistic');

  constructor(private api: ApiService,
              private log: LoggerService) {
  }

  getStatistic(pageableParams: PageableParams = {page: 0}, filterParams: any = {}): Observable<PageSlice> {
    this.log.debug('Getting tester statistic', {pageableParams: pageableParams, filterParams: filterParams});
    return this.api.get(`${this.apiUrl}`, pageableParams, filterParams)
      .pipe(
        map((response: HttpResponse<any>) => {
          this.log.debug('Got tester statistic', {response: response});
          return <PageSlice>response.body;
        }));
  }

}
