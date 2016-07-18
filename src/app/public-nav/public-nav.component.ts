import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'spr-public-nav',
  template: require ('./public-nav.component.html'),
  styles: [ require ('./public-nav.style.sass')],
  directives: [ROUTER_DIRECTIVES]
})
export class PublicNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

  toggleSidenav() {
    let sidenav = document.getElementById('sidenav');
    if ( !sidenav.className.match('show') ) {
      sidenav.className += ' show';
    } else {
      sidenav.className = sidenav.className.replace('show', '');
    }
  }
}
