import { Component, OnInit, OnDestroy } from '@angular/core'; // OnDestroy
import { CORE_DIRECTIVES } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../message';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'spr-rec-share',
  template: require('./rec-share.component.html'),
  directives: [CORE_DIRECTIVES],
  providers: [RecommendationService]
})

export class RecShareComponent implements OnInit, OnDestroy {
  error: string;
  sub: any;
  message: Message = {
    typeNetworkId: 1,
    subject: 'I want to strengthen my network and need your help!',
    message: 'Hi, I need you to confirm our relationship to strengthen ' +
      'my network using Spryly. Please confirm it by clicking on this ' +
      'link: spryly.co/recommendations/reply/'
  };

  constructor(private recommendationService: RecommendationService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.message.typeNetworkId = id;
      this.message.message = this.message.message + id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  sendMessage() {
    this.recommendationService.sendMessage(this.message)
      .then()
      .catch(error => this.error = error);
  }
}
