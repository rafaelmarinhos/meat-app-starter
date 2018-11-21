import { MenuItem } from "./../restaurant-detail/menu-item/menu-item.model";
import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { api_url } from "app/app.api";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${api_url}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get(`${api_url}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviews(id: string): Observable<any> {
    return this.http
      .get(`${api_url}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  menu(id: string): Observable<MenuItem[]> {
    return this.http
      .get(`${api_url}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
