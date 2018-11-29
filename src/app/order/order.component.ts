import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Vale Refeição', value: 'REF' }
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  incQtde(item: CartItem) {
    this.orderService.incQtde(item);
  }

  decQtde(item: CartItem) {
    this.orderService.decQtde(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }
}
