import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restService.reviews(this.route.parent.snapshot.params['id']);
  }
}
