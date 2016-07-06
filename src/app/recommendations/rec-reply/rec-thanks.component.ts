import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
@Component({
  selector: 'spr-thanks-landing',
  template: require('./rec-thanks.component.html')
})
export class RecThanksComponent implements OnInit {
  benefits: boolean = false;
  form: any;
  constructor(private route: ActivatedRoute,
      private router: Router) {}

  ngOnInit() {
    this.form = this.route.params.subscribe(params=>{
      let b = params['benefits'];
      console.log(b);
      if(b='new'){
        this.benefits=true;
      }
    });
  }
}
  