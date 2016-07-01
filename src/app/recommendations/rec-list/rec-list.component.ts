import { Component, OnInit } from '@angular/core';
import { RecDetailComponent } from '../rec-detail';
@Component({
  selector: 'spr-rec-list',
  template: require('./rec-list.component.html'),
  directives: [RecDetailComponent]
})

export class RecListComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
