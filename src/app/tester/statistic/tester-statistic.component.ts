import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TesterStatisticService } from '../../core/statistic/tester-statistic.service';
import { Subject, Subscription } from 'rxjs';
import { PageableParams, PageSlice } from '../../core/api/api.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TesterBugsComponent } from './bug/tester-bugs.component';
import { GridComponent } from '../../shared/grid';

@Component({
  selector: 'app-tester-statistic',
  templateUrl: './tester-statistic.component.html',
  styleUrls: ['tester-statistic.component.scss']
})
export class TesterStatisticComponent implements OnInit, OnDestroy {

  @ViewChild('grid') grid: GridComponent;
  dialogConfig: any = {backdrop: 'static', keyboard: false, size: 'md'};
  changesSubscription: Subscription;
  testerStatisticSubscription: Subscription;
  pageableParams: PageableParams = {page: 0, size: 5};
  changes: Subject<any> = new Subject();
  data: PageSlice;
  filterParams = {
    countryIds: null,
    deviceIds: null
  };

  constructor(private testerStatisticService: TesterStatisticService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.subscribeToStatistic();
    this.changes.next();
  }

  ngOnDestroy() {
    this.changesSubscription.unsubscribe();
    this.testerStatisticSubscription.unsubscribe();
    this.changes.unsubscribe();
  }

  onPageChange(event: any) {
    this.pageableParams.page = event.page;
    this.changes.next();
  }

  onActionClick(event: any) {
    const dialog = this.modalService.open(TesterBugsComponent, this.dialogConfig);
    dialog.componentInstance.testerStatistic = event.row;
  }

  onSearch(filterParams: any) {
    this.filterParams = filterParams;
    this.pageableParams.page = 0;
    this.grid.resetPage();
    this.changes.next();
  }

  private subscribeToStatistic() {
    this.changesSubscription = this.changes.subscribe(() => {
      this.testerStatisticSubscription = this.testerStatisticService.getStatistic(this.pageableParams, this.filterParams)
        .subscribe(pageSlice => {
          this.data = pageSlice;
        });
    });
  }

}
