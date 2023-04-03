import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  cartArray: Product[] = [];
  //rxjs
  private cartValueSource = new BehaviorSubject('0');
  currentCartValue = this.cartValueSource.asObservable();

  constructor() {}

  setCartProducts(data: Product[]): void {
    this.cartArray = data;
  }

  getCartProducts(): Product[] {
    return this.cartArray;
  }

  //rxjs
  updateCart(message: string) {
    this.cartValueSource.next(message);
  }
}
