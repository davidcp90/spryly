import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ExperienceDetailComponent } from '../experiences/experience-detail';
import { Title }     from '@angular/platform-browser';
import { ProfileService } from './profile.service';
import { ProfileTourComponent } from './profile-tour';
import {ExperienceService} from '../experiences/experience.service';
@Component({
  selector: 'spr-profile',
  directives: [ExperienceDetailComponent, ProfileTourComponent],
  template: require('./profile.component.html'),
  providers: [ProfileService, ExperienceService]
})
export class ProfileComponent implements OnInit, AfterViewInit {
  verifications: any;
  profile: any;
  executeTour: boolean = false;
  constructor(private titleService: Title,
    private _profileService: ProfileService,
    private _experienceService: ExperienceService ) {}

  ngOnInit() {
    this.titleService.setTitle( 'Your profile - Spryly' );
    this.getVerifications();
    this.getProfile();
  }
  ngAfterViewInit() {
    this.activeLink();
  }
  getVerifications() {
    this._profileService.getVerificationsMock().then(verifications => this.verifications = verifications);
    // this._experienceService.getAllExperiences().subscribe(verifications => this.verifications = verifications);
  }
  getProfile() {
    this._profileService.getProfileMock().then(profile => this.profile = profile[0]);
    // this._profileService.getProfile().then(profile => this.profile = profile);
  }
  activeLink() {
    let profileLink = document.getElementById('profile-link');
    profileLink.className += ' active';
  }
}
