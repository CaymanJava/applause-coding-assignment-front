import { Device } from '../device/device.model';

export class TesterStatistic {
  id: number;
  firstName: string;
  lastName: string;
  countryCode: string;
  devices: Device[];
  bugs: { [key: string]: number; };
  criteriaBugCount: number;
  lastLogin: string;
}
