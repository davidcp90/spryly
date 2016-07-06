import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home';
import { StyleguideComponent } from './styleguide';
import { DashboardComponent } from './dashboard';
import {
  RecDetailComponent,
  RecListComponent,
  RecReplyComponent,
  RecReplyLandingComponent,
  RecRequestComponent,
  RecShareComponent,
  RecThanksComponent
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
import {
  UserComponent,
  UserSignInComponent,
  UserSignUpComponent
} from './users';
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
  { path: 'recommendations/share/:id', component: RecShareComponent },
  { path: 'recommendations/view', component: RecDetailComponent },
  { path: 'recommendations/reply', component: RecReplyComponent },
  { path: 'conversations', component: ConversationListComponent },
  { path: 'conversations/view', component: ConversationDetailComponent },
  { path: 'conversations/new', component: ConversationRequestComponent },
  ]
},
{
  path: 'connections/:id',
  component: RecReplyLandingComponent
},
{
  path: 'thanks/:benefits',
  component: RecThanksComponent
},
{
  path: 'users',
  component: UserComponent,
  children: [
    {
      path: 'signin',
      component: UserSignInComponent
    },
    {
      path: 'signup',
      component: UserSignUpComponent
    }
  ]
}];
export const APP_ROUTER_PROVIDERS = [
provideRouter(DashboardRoutes)
];
