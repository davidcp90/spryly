import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../recommendation.service';
import { RecDetailComponent } from '../rec-detail';
import { Recommendation } from '../recommendation';

@Component({
  selector: 'spr-rec-list',
  template: require('./rec-list.component.html'),
  directives: [RecDetailComponent],
  providers: [RecommendationService]
})

export class RecListComponent implements OnInit {
  recommendations: Recommendation[];

  constructor(private _recommendationService: RecommendationService) {
  }
  
  getRecommendations() {
    this._recommendationService.getRecommendations()
      .then(recommendations => this.recommendations = recommendations);
  }
  
  ngOnInit(){
    this.getRecommendations();  
  }
}
