import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'spr-top-nav',
  template: require ('./top-nav.component.html'),
  directives: [ROUTER_DIRECTIVES]
})

export class TopNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public toggleSidenav(): void {
    let sidenav = document.getElementById('sidenav');

    if ( !sidenav.className.match('show') ) {
      sidenav.className += ' show';
    } else {
      sidenav.className = sidenav.className.replace('show', '');
    }
  }
}
