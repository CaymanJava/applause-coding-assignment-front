import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterStatisticComponent } from './statistic/tester-statistic.component';
import { StatisticFilterComponent } from './statistic/filter/filter.component';
import { TesterBugsComponent } from './statistic/bug/tester-bugs.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { StatisticRoutingModule } from './statistic-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    StatisticRoutingModule,
    NgbModule
  ],
  declarations: [
    TesterStatisticComponent,
    StatisticFilterComponent,
    TesterBugsComponent
  ],
  entryComponents: [
    TesterBugsComponent
  ]
})
export class StatisticModule {
}
