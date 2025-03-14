import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();
  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food))
    console.log(this.cart.items);

  }
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }
  changeQuantity(quantity: number, foodId: number) {
    console.log(quantity,foodId);

    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    console.log(cartItem);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    console.log(cartItem);
  }
  getCart(): Cart {
    return this.cart;
  }

  getTotalQuantity(): number {
    return this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  constructor() { }
}
