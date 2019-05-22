import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GridColumnComponent } from './grid-column.component';

@Component({
  selector: 'app-grid-header',
  template: `
    <ng-template [ngIf]="column.title">
      {{column.title}}
    </ng-template>
  `
})
export class GridHeaderComponent implements OnInit, OnChanges {

  @Input() column: GridColumnComponent;

  ngOnInit() {
  }

  ngOnChanges(): void {
  }

}
