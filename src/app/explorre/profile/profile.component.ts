import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap/components/carousel';

import { Profile } from './profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'explorre-profile',
  template: require('./profile.component.html'),
  styles: [require('./profile.component.sass')],
  directives: [CORE_DIRECTIVES, CAROUSEL_DIRECTIVES],
  providers: [ProfileService]
})
export class ExplorreProfileComponent implements OnInit {
  title: 'Carreer';
  profile: Profile;

  constructor(private profileService: ProfileService) { }

  getProfile() {
    this.profileService.getProfile().then(profile => this.profile = profile);
  }

  ngOnInit() {
    this.getProfile();
  }

}
