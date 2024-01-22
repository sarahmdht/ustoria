import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

//modules and services
import { Cart } from '../shared/models/Cart';
import { Product } from '../shared/models/Product';
import { CartService } from '../services/cart/cart.service';
import CartItem from '../shared/models/CartItem';

//components
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, SideBarComponent, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!: Cart;
  item!: CartItem;
  product!: Product;

//to set cart
  constructor(private cartService: CartService) {
    this.setCart();
  }

  // delete item from cart
  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.product.id);
    this.setCart();
  }

  // update quantity
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

  // read cart
  setCart() {
    this.cart = this.cartService.getCart();
  }

// for + / - butttons to update quantity
  handleQuantity(val: string, cartItem: CartItem) {
    if (cartItem.product.quantity< 100 && val === 'plus') {
      cartItem.product.quantity++;
    } else if (cartItem.product.quantity > 1 && val === 'minus') {
      cartItem.product.quantity--;
    }
  
    this.cartService.changeQuantity(cartItem.product.id, cartItem.product.quantity);
    this.setCart();
  }
}
