import { Component, OnInit } from '@angular/core';
import { ExperienceDetailComponent } from '../experiences/experience-detail';
@Component({
  selector: 'spr-profile',
  directives: [ExperienceDetailComponent],
  template: require('./profile.component.html'),
})
export class ProfileComponent implements OnInit {
  profileImage= ' https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Y0SNUP4FC3.jpg';
  constructor() {}

  ngOnInit() {

  }
}
