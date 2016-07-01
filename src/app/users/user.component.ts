import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'spr-user',
  template: require('./user.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class UserComponent {

  constructor() { }

}
