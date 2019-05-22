import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GridColumnComponent, GridComponent } from './grid';
import { GridActionComponent } from './grid/grid-action.component';
import { GridHeaderComponent } from './grid/grid.header.component';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CountrySelectComponent } from './country-select/country-select.component';
import { DeviceSelectComponent } from './device-select/device-select.component';

const gridComponents = [
  GridComponent,
  GridColumnComponent,
  GridActionComponent,
  GridHeaderComponent
];

const components = [
  CountrySelectComponent,
  DeviceSelectComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule,
    FormsModule,
    NgbTooltipModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    gridComponents,
    components
  ],
  exports: [
    gridComponents,
    components
  ]
})
export class SharedComponentsModule {
}
