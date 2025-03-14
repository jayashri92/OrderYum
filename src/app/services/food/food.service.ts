import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number):Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Chiken Burger',
        price: 325,
        deliveryTime: '20-25',
        favorite: false,
        origins: ['india', 'asia'],
        star: 3.0,
        imageUrl: '/assets/images/burger.jpg',
        tags: ['fastfood', 'burger'],
      },
      {
        id: 2,
        name: 'French Fries',
        price: 179,
        deliveryTime: '15-20',
        favorite: true,
        origins: ['itely'],
        star: 2.0,
        imageUrl: '/assets/images/fries.jpg',
        tags: ['fastfood', 'fries'],
      },
      {
        id: 3,
        name: 'Cheez Pancake',
        price: 425,
        deliveryTime: '25-35',
        favorite: false,
        origins: ['india', 'asia'],
        star: 4.0,
        imageUrl: '/assets/images/pancake.jpg',
        tags: ['slowfood', 'pancake'],
      },
      {
        id: 4,
        name: 'Aaloo Paratha',
        price: 125,
        deliveryTime: '20-25',
        favorite: true,
        origins: ['india', 'asia'],
        star: 4.0,
        imageUrl: '/assets/images/paratha.jpg',
        tags: ['heavyfood', 'paratha'],
      },
      {
        id: 5,
        name: 'Pizaa',
        price: 279,
        deliveryTime: '30-50',
        favorite: false,
        origins: ['india', 'asia'],
        star: 1.0,
        imageUrl: '/assets/images/pizza.jpg',
        tags: ['fastfood', 'burger'],
      },
      {
        id: 6,
        name: 'Samosa',
        price: 55,
        deliveryTime: '20-25',
        favorite: true,
        origins: ['india', 'asia'],
        star: 5.0,
        imageUrl: '/assets/images/samosa.jpg',
        tags: ['streatfood', 'samosa']
      },
      {
        id: 7,
        name: 'Tomato-Soup',
        price: 155,
        deliveryTime: '20-25',
        favorite: false,
        origins: ['india', 'asia'],
        star: 3.0,
        imageUrl: '/assets/images/tomato_soup.jpg',
        tags: ['slowfood', 'tomatosoup'],
      },
      {
        id: 8,
        name: 'Indian Thali',
        price: 240,
        deliveryTime: '10-15',
        favorite: false,
        origins: ['india', 'asia'],
        star: 5.0,
        imageUrl: '/assets/images/thali.jpg',
        tags: ['slowfood', 'thali']
      }
    ]
  }
}
