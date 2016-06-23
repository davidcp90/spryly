import { Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {TopNavComponent} from '../top-nav';
import {SideNavComponent} from '../side-nav';

@Component({
  selector: 'spr-dashboard',
  directives: [...ROUTER_DIRECTIVES,
  	  SideNavComponent,
  	  TopNavComponent
  ],
  template: require('./dashboard.component.html')
})
export class DashboardComponent {

  constructor() {
    // Do stuff
  }

}
