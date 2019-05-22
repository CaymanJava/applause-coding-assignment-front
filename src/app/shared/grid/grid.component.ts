import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { GridColumnComponent } from './grid-column.component';
import { GridActionComponent } from './grid-action.component';
import { DatePipe } from '@angular/common';
import { PageableParams, PageSlice } from '../../core/api/api.model';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  page = 1;

  @Input() data: PageSlice;

  @ContentChildren(GridColumnComponent) columns: QueryList<GridColumnComponent>;
  @ContentChildren(GridActionComponent) actions: QueryList<GridActionComponent>;

  @Output() pageableParamsChange: EventEmitter<PageableParams> = new EventEmitter();
  @Output() actionClick: EventEmitter<any> = new EventEmitter();

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
  }

  onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.pageableParamsChange.emit({page: pageNumber - 1, size: this.data.size});
  }

  onActionClick(action: string, row: any) {
    this.actionClick.emit({action: action, row: row});
  }

  resetPage() {
    this.page = 1;
  }

  getValue(value: string, dataType: string) {
    if (value === null) {
      return '';
    }
    switch (dataType) {
      case ('string'):
        return value;
      case ('number'):
        return value;
      case ('date-time'):
        return this.datePipe.transform(value, 'yyyy-MM-dd HH:mm');
    }
  }

}
