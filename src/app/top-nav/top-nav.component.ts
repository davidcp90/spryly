import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'spr-top-nav',
  template: require ('./top-nav.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class TopNavComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
  toggleSidenav(){
    let sidenav=document.getElementById('sidenav');
    if(!sidenav.className.match('show')){
      sidenav.className += " show";
    }
    else{
      sidenav.className=sidenav.className.replace("show","");
    }
  }
  toggleNotifications(){
    let notifications=document.getElementById('notification-center');
    if(!notifications.className.match('show')){
      notifications.className += " show";
    }
    else{
      notifications.className=notifications.className.replace("show","");
    }
  }
}