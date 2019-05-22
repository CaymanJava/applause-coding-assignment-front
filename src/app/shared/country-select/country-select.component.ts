import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CountryService } from '../../core/country/country.service';
import { Subscription } from 'rxjs';
import { Country } from '../../core/country/country.model';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent implements OnInit, OnDestroy {

  countriesSubscription: Subscription;
  dropdownSettings;
  countries: Country[];
  selectedCountries;

  @Output() countriesSelected: EventEmitter<number[]> = new EventEmitter();

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.loadCountries();
    this.initSettings();
  }

  ngOnDestroy() {
    this.countriesSubscription.unsubscribe();
  }

  onCountrySelectedOrDeselected() {
    this.countriesSelected.emit(this.selectedCountries.map(country => country.id));
  }

  onAllCountriesSelected() {
    this.countriesSelected.emit(this.countries.map(country => country.id));
  }

  onFilterClear() {
    this.countriesSelected.emit([]);
  }

  private initSettings() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'code',
      selectAllText: 'Select All',
      unSelectAllText: 'Clear filter',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  private loadCountries() {
    this.countriesSubscription = this.countryService.getCountries()
      .subscribe(result => {
        this.countries = result;
      });
  }

}
