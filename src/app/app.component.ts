import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
/*import { HomeComponent } from './home';*/
/*import { DashboardComponent } from './dashboard';*/

/*
 * App Component
 * Top Level Component
 */
 @Component({
   selector: 'spr-app',
   directives: [ ROUTER_DIRECTIVES],
   template: require('./app.component.html'),
 })
 export class AppComponent {
    public viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef) {
      // You need this small hack in order to catch application root view container ref
      this.viewContainerRef = viewContainerRef;
    }
 }
