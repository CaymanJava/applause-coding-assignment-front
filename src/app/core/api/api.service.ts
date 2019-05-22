import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { PageableParams } from './api.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get(url: string, pageableParams?: PageableParams, filterParams?: any): Observable<HttpResponse<any>> {
    return this.processAPIRequest(url, 'GET', pageableParams, filterParams);
  }

  private processAPIRequest(url: string, method: string,
                            pageableParams?: PageableParams, filterParams?: any): Observable<HttpResponse<any>> {
    return this.callAPI(url, method, pageableParams, filterParams)
      .pipe(catchError(initialError => {
        return throwError(initialError);
      }));
  }

  private callAPI(url: string, method: string,
                  pageableParams?: PageableParams, filterParams?: any): Observable<HttpResponse<any>> {
    return this.getResponse(url, method, pageableParams, filterParams);
  }

  private getResponse(url: string, method: string, pageableParams?: PageableParams, filterParams?: any): Observable<HttpResponse<any>> {
    if (method === 'GET') {
      let urlSearchParams: HttpParams = new HttpParams();

      urlSearchParams = this.getPageableParams(urlSearchParams, pageableParams);
      urlSearchParams = this.getFilterParams(urlSearchParams, filterParams);

      return this.http.get(url, {observe: 'response', params: urlSearchParams});
    }
    return null;
  }

  private getPageableParams(urlSearchParams: HttpParams, pageableParams?: PageableParams) {
    if (typeof pageableParams !== 'undefined') {
      const pageableParamsSource: any = pageableParams;
      ['page', 'size'].map(key => {
        if (pageableParamsSource.hasOwnProperty(key)) {
          urlSearchParams = urlSearchParams.append(key, `${pageableParamsSource[key]}`);
        }
      });
    }
    return urlSearchParams;
  }

  private getFilterParams(urlSearchParams: HttpParams, filterParams?: any) {
    if (typeof filterParams !== 'undefined') {
      Object.keys(filterParams).map(key => {
        const value = filterParams[key];
        if (null != value && '' !== value) {
          urlSearchParams = urlSearchParams.append(key, `${value}`);
        }
      });
    }
    return urlSearchParams;
  }

}
