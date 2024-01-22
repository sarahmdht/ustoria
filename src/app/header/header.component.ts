import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// models and services
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';

// fontAwesome 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
heart = faHeart;
user = faUser;
cart = faShoppingCart;

carttotal!: Cart;  //to update the above cart button with actual cart
constructor(private cartService: CartService) {
  this.setCart();
 }

setCart() {
  this.carttotal = this.cartService.getCart();
}

}
