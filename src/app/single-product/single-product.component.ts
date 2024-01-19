import { Component } from '@angular/core';
import { ActivatedRoute, Router , RouterLink } from '@angular/router';
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
  products!: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private router:Router , private cartService: CartService) {
    this.activatedRoute.params.subscribe(params => {
      this.productId = Number(params['id']);
      this.productService.getProductById(this.productId).then((product: Product | undefined) => {
        this.productDetails = product;
      });
    });
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  addToCart() {
    if (this.productDetails) {
      this.cartService.addToCart(this.productDetails);
    }
  }


  
  changeQuantity(quantityInString: string) {
    if (this.productDetails) {
      const quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(this.productDetails.id, quantity);
      this.setCart();
    }
  }
}
//   // read
//   setCart() {
//     this.cart = this.cartService.getCart();
//   }
// }
