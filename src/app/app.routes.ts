import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home';
import { StyleguideComponent } from './styleguide';
import { DashboardComponent } from './dashboard';
import {
  RecDetailComponent,
  RecListComponent,
  RecReplyComponent,
  RecReplyLandingComponent,
  RecRequestComponent
} from './recommendations';
import {
  ConversationDetailComponent,
  ConversationListComponent,
  ConversationRequestComponent
} from './conversations';
import {
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
  { path: 'network', component: ContactListComponent },
  { path: 'network/map', component: ContactMapComponent },
  { path: 'network/add', component: ContactAddComponent },
  { path: 'recommendations', component: RecListComponent },
  { path: 'recommendations/new', component: RecRequestComponent },
  { path: 'recommendations/view', component: RecDetailComponent },
  { path: 'recommendations/reply', component: RecReplyComponent },
  { path: 'conversations', component: ConversationListComponent },
  { path: 'conversations/view', component: ConversationDetailComponent },
  { path: 'conversations/new', component: ConversationRequestComponent },
  ]
},
{
  path: 'recommendation',
  component: RecReplyLandingComponent
}
];
export const APP_ROUTER_PROVIDERS = [
provideRouter(DashboardRoutes)
];
