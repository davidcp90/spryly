import { Component, OnInit } from '@angular/core';
import { PublicNavComponent } from '../public-nav';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'spr-home',
  template: require('./home.component.html'),
  directives: [PublicNavComponent, ROUTER_DIRECTIVES],
  styles: [ require('./home.style.sass') ]
})
export class HomeComponent implements OnInit {

  public constructor() {
  }

  ngOnInit() {
  }

}
