import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  rating = 0;
  stars = [1, 2, 3, 4, 5]


  food!: Foods;
  constructor(private activatedRoute: ActivatedRoute,
    private foodService: FoodService, private cartSertvice:CartService, private router:Router) {

    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }
  rate(star: number) {
    console.log('star clicked', star)
    this.rating = star;
  }
  addToCart(){
    this.cartSertvice.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
