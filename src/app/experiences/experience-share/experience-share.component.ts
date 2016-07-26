import { Component, OnInit } from '@angular/core';
import { ExperienceShareDetailComponent } from './experience-share-detail';
import { Title }     from '@angular/platform-browser';
import {ExperienceService } from '../experience.service';
@Component({
  selector: 'spr-experience-share',
  directives: [ExperienceShareDetailComponent],
  providers: [ExperienceService],
  template: require( './experience-share.component.html' )
})
export class ExperienceShareComponent implements OnInit {
  shares: any;
  constructor(private titleService: Title,
    private _experienceService: ExperienceService) {}

  ngOnInit() {
     this.titleService.setTitle( 'Share and verify - Spryly' );
     this.getShares();
  }
  getShares() {
    this._experienceService.getShares().then(shares => this.shares = shares);
  }
}
