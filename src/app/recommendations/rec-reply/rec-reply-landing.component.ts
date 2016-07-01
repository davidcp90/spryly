import { Component, OnInit } from '@angular/core';
import { RecReplyFormComponent } from './rec-reply-form.component';
@Component({
  selector: 'spr-rec-reply-landing',
  template: require('./rec-reply-landing.component.html'),
  directives: [RecReplyFormComponent],
})
export class RecReplyLandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}
  