import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, SideBarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!: Cart;
  constructor(private cartService: CartService){
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
}
