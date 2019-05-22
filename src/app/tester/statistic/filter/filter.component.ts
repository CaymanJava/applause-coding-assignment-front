import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-statistic-filter',
  templateUrl: './filter.component.html'
})
export class StatisticFilterComponent implements OnInit {

  filterParams = {
    countryIds: null,
    deviceIds: null
  };

  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onCountriesSelected(countryIds: number[]) {
    this.filterParams.countryIds = countryIds;
  }

  onDevicesSelected(deviceIds: number[]) {
    this.filterParams.deviceIds = deviceIds;
  }

  onSearch() {
    this.search.emit(this.filterParams);
  }

}
