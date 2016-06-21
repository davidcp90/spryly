import { Component, ViewContainerRef } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HomeComponent } from './home';
import { DashboardComponent } from './dashboard';
import { UserLoginComponent } from './user-login';


/*
 * App Component
 * Top Level Component
 */
 @Component({
   selector: 'spr-app', 
   directives: [...ROUTER_DIRECTIVES,UserLoginComponent],
   template: require('./app.component.html'),
 })
 @RouteConfig([
   {path: '/', component: HomeComponent, name: 'Home'},
   { path: '/dashboard/...', component: DashboardComponent, name: 'Dashboard' }
   ])
 export class AppComponent {
   public constructor(viewContainerRef: ViewContainerRef) {
     // You need this small hack for ng2bootstrap components. This might show an error in console and in the compiler. But you can ignore it without problem
     this.viewContainerRef = viewContainerRef;
   }
 }
