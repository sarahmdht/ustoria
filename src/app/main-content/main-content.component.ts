import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// models and services
import { CartService } from '../services/cart/cart.service';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products/products.service';

// fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    RouterLink,
    FontAwesomeModule,
  CarouselModule],
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoWidth: true,
    margin: 20,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
}
