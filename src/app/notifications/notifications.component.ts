import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'spr-notifications',
  template: require ('./notifications.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class NotificationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }
}
