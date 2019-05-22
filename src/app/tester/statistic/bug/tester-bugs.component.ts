import { Component, Input, OnInit } from '@angular/core';
import { TesterStatistic } from '../../../core/statistic/tester-statistic.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: module.id,
  templateUrl: './tester-bugs.component.html'
})
export class TesterBugsComponent implements OnInit {

  @Input() testerStatistic: TesterStatistic;

  constructor(private modal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
