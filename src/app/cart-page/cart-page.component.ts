import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { Cart } from '../shared/models/Cart';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart() //instance load data
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(quantity,cartItem.food.id );
    this.setCart();
  }
  get totalQuantity(): number {
    return this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }

}
