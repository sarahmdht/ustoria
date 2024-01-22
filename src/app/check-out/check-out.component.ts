import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

//Models and services
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import CartItem from '../shared/models/CartItem';

//components
import { SideBarComponent } from '../side-bar/side-bar.component';

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

  constructor(private cartService: CartService) {
    this.setCart();
  }
  // to update cart with items 
  setCart() {
    this.carttotal = this.cartService.getCart();
  }
  // to remove from cart
  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.product.id);
    this.setCart();
  }
}
