import { Component, OnInit, Input } from '@angular/core';
import { ShareInfo } from '../shareInfo';
@Component({
  selector: 'spr-experience-share-detail',
  template: require('./experience-share-detail.component.html'),
  styles: [require('./experience-share-detail.style.sass')]
})

export class ExperienceShareDetailComponent implements OnInit {
  @Input() shareInfo: ShareInfo;
  constructor() { }

  ngOnInit() { }

}
