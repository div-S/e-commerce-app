import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductsService } from 'src/app/services/products.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  uniqueDeptTypes: Product['departmentType'][] = [];
  cart: Product[] = [];
  cartValue: string = '';

  constructor(
    private productService: ProductsService,
    private cartService: SharedService
  ) {}

  getUniqueDeptTypes(products: Product[]) {
    //   this.uniqueDeptTypes = products.map(function(o){return o.departmentType}).filter(function(v,i,a) {
    //     return a.indexOf(v)===i
    // });
    const myUnique = new Set();
    products.forEach((element) => {
      myUnique.add(element.departmentType);
    });
    //this.uniqueDeptTypes.from(myUnique);
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        // this.getUniqueDeptTypes(products);
      },
      error: (response) => {
        console.log(response);
      },
    });

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
