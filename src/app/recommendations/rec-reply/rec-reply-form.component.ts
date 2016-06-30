import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spr-rec-reply-form',
  template: require('./rec-reply-form.component.html'),
  styles: [`
      .certify-identity{
      text-align: center;
    }
  .certify-identity p{
    font-weight: 500
    font-size: 13px 
  }
    .mini-inline{
      width: 50% !important;
      margin: 0 auto;
    }
      .mini-inline label{
        position: relative;
        top: 10px;
      }
    .mini-inline input{
      width: 100% !important;
      text-align: center
    }
  `]
})
export class RecReplyFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }
}
  