import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home';
import { DashboardComponent } from './dashboard';
import { UserLoginComponent } from './user-login';
/*
 * App Component
 * Top Level Component
 */
 @Component({
   selector: 'spr-app', 
   directives: [ ROUTER_DIRECTIVES, UserLoginComponent],
   template: require('./app.component.html'),
 })
 export class AppComponent {
   public constructor(viewContainerRef: ViewContainerRef) {
     // You need this small hack for ng2bootstrap components. This might show an error in console and in the compiler. But you can ignore it without problem
     this.viewContainerRef = viewContainerRef;
   }
 }
