import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home';
import { StyleguideComponent } from './styleguide';
import { DashboardComponent } from './dashboard';
import {
	RecDetailComponent,
	RecommendationService,
	RecListComponent,
	RecReplyComponent,
	RecRequestComponent
} from './recommendations';
import {
	ConversationDetailComponent,
	ConversationsService,
	ConversationListComponent,
	ConversationRequestComponent
} from './conversations';
import {
	ContactsService,
	ContactAddComponent,
	ContactListComponent,
	ContactMapComponent
} from './contacts';

export const DashboardRoutes: RouterConfig = [
	{
    		path: '',
		redirectTo: '/home',
		terminal: true
  	},
	{ 
		path: 'home', 
		component: HomeComponent 
	},
	{
		path: 'styleguide',
		component: StyleguideComponent
	},
	{ 
		path: 'dashboard', 
		component: DashboardComponent,
		children: [
			{ path: '', redirectTo: '/dashboard/recommendations', terminal: true },
			{ path: 'contacts', component: ContactListComponent },
			{ path: 'contacts/map', component: ContactMapComponent },
			{ path: 'contacts/add', component: ContactAddComponent },
			{ path: 'recommendations', component: RecListComponent },
			{ path: 'recommendations/new', component: RecRequestComponent },
			{ path: 'recommendations/view', component: RecDetailComponent },
			{ path: 'recommendations/reply', component: RecReplyComponent },
			{ path: 'conversations', component: ConversationListComponent },
			{ path: 'conversations/view', component: ConversationDetailComponent },
			{ path: 'conversations/new', component: ConversationRequestComponent },
		]

	}
	
];
export const APP_ROUTER_PROVIDERS = [
	provideRouter(DashboardRoutes)
];
