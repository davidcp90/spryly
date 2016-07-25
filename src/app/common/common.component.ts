import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'spr-common',
  template: require('./common.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class ExperienceComponent {

  constructor() { }

}
