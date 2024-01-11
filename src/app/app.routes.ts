import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'cart', component: CartComponent},
    { path: 'checkout', component: CheckOutComponent},
    { path: 'product/:id', component: SingleProductComponent}
];
