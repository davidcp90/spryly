import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import { UserLoginComponent } from './user-login.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
@RouteConfig([
  {
    path: '/login',
    name: 'LogIn',
    component: UserLoginComponent,
    useAsDefault: true
  }
])
export class AppComponent {
    title = 'Authentication Test'
}
