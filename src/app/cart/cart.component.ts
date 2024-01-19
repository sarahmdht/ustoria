import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import CartItem from '../shared/models/CartItem';
import { RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';

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


  constructor(private cartService: CartService) {
    this.setCart();
  }

  // delete
  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.product.id);
    this.setCart();
  }

  // update
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

  // read
  setCart() {
    this.cart = this.cartService.getCart();
  }


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
