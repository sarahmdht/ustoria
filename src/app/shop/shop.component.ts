import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/models/Product';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import CartItem from '../shared/models/CartItem';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: Product[] = [];
  item!: CartItem;

  constructor(private productService: ProductsService, private cartService: CartService, private activatedRoute: ActivatedRoute, private router:Router) {
  this.productService.getAllProducts().then((productsList: Product[]) => {
    this.products = productsList;
  })
  }
  addCartItem(item: Product) {
    this.cartService.addToCart(item);
  }
}
