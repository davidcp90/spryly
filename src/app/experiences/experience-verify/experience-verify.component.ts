import { Component, OnInit, ViewChild } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Experience } from '../experience';
import { ExperienceService } from '../experience.service';
import { CAROUSEL_DIRECTIVES }  from 'ng2-bootstrap/components/carousel';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/components/typeahead';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/components/tooltip';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { MODAL_DIRECTVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

import '../../rxjs-operators';

@Component({
  selector: 'spr-experience-verify',
  template: require('./experience-verify.component.html'),
  directives: [CAROUSEL_DIRECTIVES, TOOLTIP_DIRECTIVES, MODAL_DIRECTVES , TYPEAHEAD_DIRECTIVES,
    FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [BS_VIEW_PROVIDERS, ExperienceService],
  styles: [require('./experience-verify.style.sass')]
})

export class ExperienceVerifyComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: 'https://spryly.co/api/'});
  @ViewChild('childModal') public childModal: ModalDirective;
  public whatIfTooltip: string;

  error: string;
  token: string = '';
  key: string = '';
  months = [];
  years: number[] = [];
  relationships = [];
  experience: Experience;
  slides: any [];

  constructor(private experienceService: ExperienceService,
    private route: ActivatedRoute) {
      let currentYear = new Date().getFullYear();
      for (let i = 0; i < 100; i++) {
        this.years.push(currentYear - i);
      }

      this.months = [
        {value: '01', label: 'January'},
        {value: '02', label: 'February'},
        {value: '03', label: 'March'},
        {value: '04', label: 'April'},
        {value: '05', label: 'May'},
        {value: '06', label: 'June'},
        {value: '07', label: 'July'},
        {value: '08', label: 'August'},
        {value: '09', label: 'September'},
        {value: '10', label: 'October'},
        {value: '11', label: 'November'},
        {value: '12', label: 'December'}
      ];

      this.relationships = [
        '',
        ''
      ];

      this.slides = [
        {image: '/img/benefits-one-gif.gif ', title: 'Show your experience',
          description: 'Share your verified professional and educational experience with your network'},
        {image: '/img/benefits-two-gif.gif', title: 'Visualize your potential',
          description: 'Explore the verified experience of a contact'},
        {image: '/img/benefits-three-gif.gif', title: 'Expand your network',
          description: 'Discover contacts with verified experience using your network'}
      ];

      this.whatIfTooltip = 'Verifying real experiences helps you to build an authentic network.' +
        'This does not mean you are endorsing the requester, you are only verifying that the experience is real.';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let key = params['key'];

      this.experienceService.findByKey(key).subscribe(
        experience => this.experience = experience,
        error =>  {
          this.error = <any>error;
          console.log(this.error);
        }
      );
    });
  }

  submit() {
     let key = '';
     this.experienceService.verify(key, this.experience)
      .subscribe(
        experience => this.experience = experience,
        error =>  this.error = <any>error
      );
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
