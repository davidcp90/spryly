import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home';
import { StyleguideComponent } from './styleguide';
import { DashboardComponent } from './dashboard';
import { ProfileComponent } from './profile';
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
import {
  ExperienceComponent,
  ExperienceAddComponent,
  ExperienceVerifyComponent,
  ExperienceShareComponent
} from './experiences';


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
  { path: '', redirectTo: '/dashboard/profile', terminal: true },
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
  { path: 'profile', component: ProfileComponent}
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
},
{
  path: 'experiences',
  component: ExperienceComponent,
  children: [
    {
      path: 'add',
      component: ExperienceAddComponent
    },
    {
      path: 'share',
      component: ExperienceShareComponent
    },
    {
      path: 'verify/:key',
      component: ExperienceVerifyComponent
    }
  ]
}
];
export const APP_ROUTER_PROVIDERS = [
provideRouter(DashboardRoutes)
];
