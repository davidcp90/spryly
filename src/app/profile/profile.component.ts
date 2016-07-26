import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ExperienceDetailComponent } from '../experiences/experience-detail';
import { Title }     from '@angular/platform-browser';
import { ProfileService } from './profile.service';
import {Verification } from './verification';
import { ProfileTourComponent } from './profile-tour';
@Component({
  selector: 'spr-profile',
  directives: [ExperienceDetailComponent, ProfileTourComponent],
  template: require('./profile.component.html'),
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit, AfterViewInit {
  verifications: Verification[];
  profile: any;
  executeTour: boolean = false;
  constructor(private titleService: Title,
    private _profileService: ProfileService ) {}

  ngOnInit() {
    this.titleService.setTitle( 'Your profile - Spryly' );
    this.getVerifications();
    this.getProfile();
  }
  ngAfterViewInit() {
    this.activeLink();
  }
  getVerifications() {
    this._profileService.getVerifications().then(verifications => this.verifications = verifications);
  }
  getProfile() {
    this._profileService.getProfile().then(profile => this.profile = profile[0]);
  }
  activeLink() {
    let profileLink = document.getElementById('profile-link');
    profileLink.className += ' active';
  }
}
