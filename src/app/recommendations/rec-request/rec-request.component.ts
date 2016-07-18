import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router } from '@angular/router';
import { Network } from '../network';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'spr-rec-request',
  template: require('./rec-request.component.html'),
  directives: [CORE_DIRECTIVES],
  providers: [RecommendationService]
})

export class RecRequestComponent implements OnInit {
  error: string;
  status: string = '0';
  network: Network = {
    source: 0,
    sourceRole: '',
    sourceOrganization: '',
    targetEmail: '',
    targetName: '',
    targetRole: '',
    targetOrganization: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    comments: ''
  };
  // months = [ 'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December' ];
  months = [ '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12' ];
  years = [];

  constructor(private recommendationService: RecommendationService,
    private router: Router) {
      let userId = Number(localStorage.getItem('id'));
      this.network.source = userId ? userId : 0;
    }

  ngOnInit() {
    let count = 0;
    console.log(this.network.source);

    while (count < 100) {
      this.years.push(2016 - count++);
    }
  }

  request() {
    this.recommendationService.request(this.network)
      .then(response => this.gotoShare(response))
      .catch(error => this.error = error);
  }

  gotoShare(response) {
    this.router.navigate(['/dashboard/recommendations/share/', response.id]);
  }
}
