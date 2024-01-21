import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    RouterLink,
    FontAwesomeModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  products: Product[] = [];
  cart = faShoppingCart;
  link = faLink

  constructor(private productService: ProductsService, private cartService: CartService) {
    this.productService.getAllProducts().then((productsList: Product[]) => {
      this.products = productsList;
    })
  }
  addCartItem(item: Product) {
    this.cartService.addToCart(item);
  }
}
