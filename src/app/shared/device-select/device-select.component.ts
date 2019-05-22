import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Device } from '../../core/device/device.model';
import { DeviceService } from '../../core/device/device.service';

@Component({
  selector: 'app-device-select',
  templateUrl: './device-select.component.html'
})
export class DeviceSelectComponent implements OnInit, OnDestroy {

  devicesSubscription: Subscription;
  dropdownSettings;
  devices: Device[];
  selectedDevices;

  @Output() devicesSelected: EventEmitter<number[]> = new EventEmitter();

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.loadDevices();
    this.initSettings();
  }

  ngOnDestroy() {
    this.devicesSubscription.unsubscribe();
  }

  onDeviceSelectedOrDeselected() {
    this.devicesSelected.emit(this.selectedDevices.map(country => country.id));
  }

  onAllDevicesSelected() {
    this.devicesSelected.emit(this.devices.map(country => country.id));
  }

  onClearFilter() {
    this.devicesSelected.emit([]);
  }

  private initSettings() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'description',
      selectAllText: 'Select All',
      unSelectAllText: 'Clear filter',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  private loadDevices() {
    this.devicesSubscription = this.deviceService.getDevices()
      .subscribe(result => {
        this.devices = result;
      });
  }

}
