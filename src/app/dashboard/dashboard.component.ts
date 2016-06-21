import { Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {MainDashboardComponent} from './main-dashboard.component';
import { 
	RecDetailComponent, 
	RecDetailService,
	RecListComponent,
	RecListService,
	RecReplyComponent,
	RecReplyService,
	RecRequestService,
	RecRequestComponent
} from '../recommendations';

@Component({
  selector: 'spr-dashboard',
  directives: [...ROUTER_DIRECTIVES, 
	  RecDetailComponent, 
	  RecListComponent,
	  RecReplyComponent,
	  RecRequestComponent
  ],
  template: require('./dashboard.component.html')
})
@RouteConfig([
	{ path: '/', component: MainDashboardComponent, name: 'Home', useAsDefault: true },
	{ path: '/recommendations', component: RecListComponent, name: 'Recommendations' },
	{ path: '/recommendations/new', component: RecRequestComponent, name: 'New Recommendation' },
	{ path: '/recommendations/view', component: RecDetailComponent, name: 'View Recommendation' },
	{ path: '/recommendations/reply', component: RecReplyComponent, name: 'Reply Recommendation' },
	
])
export class DashboardComponent {

  constructor() {
    // Do stuff
  }


}
