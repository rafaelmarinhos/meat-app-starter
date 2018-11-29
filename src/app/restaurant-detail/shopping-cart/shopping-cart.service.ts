import { MenuItem } from "./../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(x => x.menuItem.id === item.id);
    if (foundItem) {
      this.incQtde(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  incQtde(item: CartItem) {
    item.qtde++;
  }

  decQtde(item: CartItem) {
    item.qtde--;
    if (item.qtde === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
