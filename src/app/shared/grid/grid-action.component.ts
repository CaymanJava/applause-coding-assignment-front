import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-grid-action',
  template: ' '
})
export class GridActionComponent implements OnInit {

  @Input() key: string;
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
