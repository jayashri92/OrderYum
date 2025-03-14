import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cartService:CartService){}

  getTotalQuantity(): number {
    return this.cartService.getCart().items.reduce((sum, item) => sum + item.quantity, 0);
  }


}
