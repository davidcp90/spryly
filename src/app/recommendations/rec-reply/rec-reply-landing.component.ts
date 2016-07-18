import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserSignInComponent  } from '../../users/user-signin';
import { UserSignUpComponent  } from '../../users/user-signup';
import { Router, ActivatedRoute }       from '@angular/router';
import {RecommendationService} from '../recommendation.service';
/*import { Network } from '../network';*/

@Component({
  selector: 'spr-rec-reply-landing',
  template: require('./rec-reply-landing.component.html'),
  directives: [UserSignInComponent, UserSignUpComponent],
  providers: [RecommendationService]
})

export class RecReplyLandingComponent implements OnInit, OnDestroy {
  hasToken: string = localStorage.getItem('token');
  hideform: boolean = false;
  signup: boolean = false;
  signin: boolean = false;
  thanks: boolean = false;
  benefits: boolean = false;
  data: any;
  form: any;
  interaction: any;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: RecommendationService
   ) {

  }

  ngOnInit() {
    this.form = this.route.params.subscribe(params => {
      let id = params['id'];
      this.service.getRecommendationById(id).then(data => this.data = data[0]);
    });
  }

  ngOnDestroy() {
    this.form.unsubscribe();
  }

  verifyIdentity() {
    console.log(this.hasToken);
    if (this.hasToken) {
      this.hideform = true;
      this.thanks = true;
      this.sendForm();
    } else {
      this.hideform = true;
      this.signup = true;
    }
  }

  toggleSign() {
    if (this.signup) {
      this.signup = false;
      this.signin = true;
    } else {
      this.signup = true;
      this.signin = false;
    }
  }

  sendForm() {
    console.log('Send form');
  }
}
