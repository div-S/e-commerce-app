import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
  cart: Product[] = [];
  cartValue: string = '';

  constructor(
    private productService: ProductsService,
    private cartService: SharedService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (response) => {
        console.log(response);
      },
    });
    // debugger;
    this.cart = this.cartService.getCartProducts();
    this.cartService.currentCartValue.subscribe(
      (message) => (this.cartValue = message)
    );
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartService.setCartProducts(this.cart);

    this.cartValue = this.cart.length.toString();
    this.cartService.updateCart(this.cartValue);
  }
}
