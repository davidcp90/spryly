import { Component, OnInit } from '@angular/core';
import { PublicNavComponent } from '../public-nav';
@Component({
  selector: 'spr-home',
  template: require('./home.component.html'),
  directives: [PublicNavComponent],
  styles: [ require('./home.style.sass') ]
})
export class HomeComponent implements OnInit {

  public constructor() {
  }

  ngOnInit() {
  }

}
