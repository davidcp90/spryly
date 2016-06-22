import { Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {MainDashboardComponent} from './main-dashboard.component';
import { 
	RecDetailComponent, 
	RecommendationService,
	RecListComponent,
	RecReplyComponent,
	RecRequestComponent
} from '../recommendations';
import {
	ConversationDetailComponent,
	ConversationsService,
	ConversationListComponent,
	ConversationRequestComponent
} from '../conversations';
import {
	ContactDetailComponent,
	ContactsService,
	ContactListComponent,
	ContactMapComponent
} from '../contacts';

@Component({
  selector: 'spr-dashboard',
  directives: [...ROUTER_DIRECTIVES, 
	  RecDetailComponent, 
	  RecListComponent,
	  RecReplyComponent,
	  RecRequestComponent,
	  ConversationDetailComponent,
	  ConversationListComponent,
	  ConversationRequestComponent,
	  ContactDetailComponent,
	  ContactListComponent,
	  ContactMapComponent
  ],
  template: require('./dashboard.component.html')
})
@RouteConfig([
	{ path: '/', component: MainDashboardComponent, name: 'Home', useAsDefault: true },
	{ path: '/recommendations', component: RecListComponent, name: 'Recommendations' },
	{ path: '/recommendations/new', component: RecRequestComponent, name: 'New Recommendation' },
	{ path: '/recommendations/view', component: RecDetailComponent, name: 'View Recommendation' },
	{ path: '/recommendations/reply', component: RecReplyComponent, name: 'Reply Recommendation' },
	{ path: '/contacts', component: ContactListComponent, name: 'Contacts' },
	{ path: '/contacts/view', component: ContactDetailComponent, name: 'Contact view' },
	{ path: '/contacts/map', component: ContactMapComponent, name: 'Contacts map' },
	
])
export class DashboardComponent {

  constructor() {
    // Do stuff
  }

}
