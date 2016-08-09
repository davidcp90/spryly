import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'explorre-tests',
  template: require('./explorre.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class ExplorreComponent {

  constructor() { }

}
