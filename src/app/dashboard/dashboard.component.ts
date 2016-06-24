import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {TopNavComponent} from '../top-nav';
import {SideNavComponent} from '../side-nav';
import {NotificationsComponent} from '../notifications';

@Component({
  selector: 'spr-dashboard',
  directives: [ROUTER_DIRECTIVES,
  	  SideNavComponent,
  	  TopNavComponent,
  	  NotificationsComponent
  ],
  template: require('./dashboard.component.html')
})
export class DashboardComponent {

  constructor() {
    // Do stuff
  }

}

