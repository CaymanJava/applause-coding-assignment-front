import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-column',
  template: ' '
})
export class GridColumnComponent implements OnInit {
  @Input() key: string;
  @Input() title: string;
  @Input() dataType = 'string';
  @Input() clickAction = false;

  constructor() {
  }

  ngOnInit() {
  }

}
