import { Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {TopNavComponent} from '../top-nav';
import {SideNavComponent} from '../side-nav';
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
	ContactsService,
	ContactAddComponent,
	ContactListComponent,
	ContactMapComponent
} from '../contacts';

@Component({
  selector: 'spr-dashboard',
  directives: [...ROUTER_DIRECTIVES,
  	  SideNavComponent,
  	  TopNavComponent,
	  RecDetailComponent, 
	  RecListComponent,
	  RecReplyComponent,
	  RecRequestComponent,
	  ConversationDetailComponent,
	  ConversationListComponent,
	  ConversationRequestComponent,
	  ContactListComponent,
	  ContactMapComponent,
	  ContactAddComponent
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
	{ path: '/contacts/map', component: ContactMapComponent, name: 'Contacts map' },
	{ path: '/contacts/add', component: ContactAddComponent, name: 'Contacts add' },
	{ path: '/conversations', component: ConversationListComponent, name: 'Conversations' },
	{ path: '/conversations/view', component: ConversationDetailComponent, name: 'View conversation' },
	{ path: '/conversations/new', component: ConversationRequestComponent, name: 'New conversation' },	
])
export class DashboardComponent {

  constructor() {
    // Do stuff
  }

}
