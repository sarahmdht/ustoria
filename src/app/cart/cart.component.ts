import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import CartItem from '../shared/models/CartItem';
import { RouterLink } from '@angular/router';

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
  i= 1;
  counter: number = 1;
  total = 1;


  constructor(private cartService: CartService) {
    this.setCart();
   }

  setCart() {
    this.cart = this.cartService.getCart();
  }

 plus() {
if(this.i !=100){
  this.i++;
  this.counter= this.i;
 this.total = this.item.price * this.counter;
}
 }
 
 minus() {
  if(this.i !=1){
    this.i--;
    this.counter= this.i;
    this.total = this.item.price * this.counter;
  }
 }
}
