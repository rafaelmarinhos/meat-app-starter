import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-ordem-items',
  templateUrl: './ordem-items.component.html'
})
export class OrdemItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() incQtde = new EventEmitter<CartItem>();
  @Output() decQtde = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitInc(item: CartItem) {
    this.incQtde.emit(item);
  }

  emitDec(item: CartItem) {
    this.decQtde.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
