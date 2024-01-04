import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'cart', component: CartComponent},
    { path: 'checkout', component: CheckOutComponent}
];
