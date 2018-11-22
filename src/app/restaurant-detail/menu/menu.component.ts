import { MenuItem } from "./../menu-item/menu-item.model";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RestaurantService } from "app/restaurants/restaurants.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restService.menu(this.route.parent.snapshot.params["id"]);
  }
}
