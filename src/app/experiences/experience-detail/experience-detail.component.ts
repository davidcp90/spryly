import { Component, OnInit } from '@angular/core';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/components/tooltip';
@Component({
  selector: 'spr-experience-detail',
  directives: [TOOLTIP_DIRECTIVES],
  template: require('./experience-detail.component.html')
})
export class ExperienceDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }
}
