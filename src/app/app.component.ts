import { Component, ViewContainerRef } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
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
   { path: '/about', component: AboutComponent, name: 'About' }
   ])
 export class AppComponent {
   public constructor(viewContainerRef: ViewContainerRef) {
     // this hack allows ng2bootstrap to work properly
     this.viewContainerRef = viewContainerRef;
   }
 }
