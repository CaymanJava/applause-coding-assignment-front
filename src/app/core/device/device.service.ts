import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../api/api.service';
import { LoggerService } from '@ngx-toolkit/logger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiUrl = environment.apiUrl.concat('/device');

  constructor(private api: ApiService,
              private log: LoggerService) {
  }

  getDevices(): Observable<Device[]> {
    this.log.debug('Getting devices');
    return this.api.get(`${this.apiUrl}`, {}, {})
      .pipe(
        map((response: HttpResponse<any>) => {
          this.log.debug('Got devices', {response: response});
          return <Device[]>response.body;
        }));
  }

}
