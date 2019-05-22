import { RouterModule, Routes } from '@angular/router';
import { TesterStatisticComponent } from './statistic/tester-statistic.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TesterStatisticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StatisticRoutingModule {

}
