import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import  CartItem  from '../shared/models/CartItem';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [RouterLink, SideBarComponent],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
  carttotal!: Cart;
  item!: CartItem;
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
   }
  
  setCart() {
    this.carttotal = this.cartService.getCart();
  }
  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.product.id);
    this.setCart();
  }
}
