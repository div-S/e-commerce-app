import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { ProductDetailsComponent } from './components/shop/product-details/product-details.component';
import { ProductListingComponent } from './components/shop/product-listing/product-listing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop/productListing',
    component: ProductListingComponent,
  },
  {
    path: 'shop/cart',
    component: CartComponent,
  },
  {
    path: 'shop/checkout',
    component: CheckoutComponent,
  },
  {
    path: 'shop/productDetails/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
