import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService, private cartService: CartService) {
  this.productService.getAllProducts().then((productsList: Product[]) => {
    this.products = productsList;
  })
  }
  addCartItem(item: Product) {
    this.cartService.addToCart(item);
  }
}
