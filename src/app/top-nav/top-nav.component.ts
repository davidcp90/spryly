import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/components/dropdown';
@Component({
  selector: 'spr-top-nav',
  template: require ('./top-nav.component.html'),
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, DROPDOWN_DIRECTIVES]
})

export class TopNavComponent implements OnInit {
  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};
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
   public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
