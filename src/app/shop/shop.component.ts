import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

// models and services
import { ProductsService } from '../services/products/products.service';
import { Product } from '../shared/models/Product';
import { CartService } from '../services/cart/cart.service';
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
    this.router.navigateByUrl('/cart');
  }
}
