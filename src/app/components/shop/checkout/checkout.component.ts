import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
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
