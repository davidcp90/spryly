import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {TopNavComponent} from '../top-nav';


@Component({
  selector: 'spr-experience',
  template: require('./experience.component.html'),
  directives: [ROUTER_DIRECTIVES, TopNavComponent]
})
export class ExperienceComponent {

  constructor() { }

}
