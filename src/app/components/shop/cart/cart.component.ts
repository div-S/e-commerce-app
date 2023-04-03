import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  cartValue: number = 0;

  constructor(private cartService: SharedService) {}

  ngOnInit(): void {
    this.products = this.cartService.getCartProducts();
    this.cartValue = this.products
      .map((element) => element.price)
      .reduce((a, b) => a + b, 0);
  }
}
