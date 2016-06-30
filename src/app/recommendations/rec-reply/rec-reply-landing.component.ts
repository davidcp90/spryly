import { Component, OnInit } from '@angular/core';
import { RecReplyFormComponent } from './rec-reply-form.component';
@Component({
  selector: 'spr-rec-reply-landing',
  template: require('./rec-reply-landing.component.html'),
  directives: [RecReplyFormComponent],
  styles: [`
    .landing {
      background: url('img/landing-bg.jpg') no-repeat center center;
      background-size: cover;
      background-attachment: fixed;
      width: 100%;
      height: 100vh;
      padding-top: 80px;
    }
    .landing-form{
      width: 700px;
      margin: 0 auto;
    }
  `],
})
export class RecReplyLandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}
  