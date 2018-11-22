import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "./shopping-cart.service";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html"
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingService: ShoppingCartService) {}

  ngOnInit() {}

  items(): any[] {
    return this.shoppingService.items;
  }

  total(): number {
    return this.shoppingService.total();
  }

  clear() {
    this.shoppingService.clear();
  }

  remove(item: any) {
    this.shoppingService.removeItem(item);
  }

  add(item: any) {
    this.shoppingService.addItem(item);
  }
}
