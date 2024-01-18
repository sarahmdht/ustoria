import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/models/Product';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import CartItem from '../shared/models/CartItem';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [SideBarComponent, RouterLink, MainContentComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  productId: number | undefined;
  productDetails: Product | undefined;
  item!: CartItem;
  cart!: Cart;


  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private cartService: CartService) {
    //to get id
    this.activatedRoute.params.subscribe(params => {
      this.productId = Number(params['id']);
      //to bring certain product
      this.productService.getProductById(this.productId).then((product: Product | undefined) => {
        this.productDetails = product;
      })

    })

  }
  addCartItem(item: Product) {
    this.cartService.addToCart(item);
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }
}
