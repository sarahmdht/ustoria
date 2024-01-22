import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

// models and services
import { ProductsService } from '../services/products/products.service';
import { Product } from '../shared/models/Product';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import CartItem from '../shared/models/CartItem';

// components
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { MatTabsModule } from '@angular/material/tabs';

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [SideBarComponent, FontAwesomeModule, RouterLink, MainContentComponent, MatTabsModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  productId: number | undefined;
  productDetails: Product | undefined;
  item!: CartItem;
  cart!: Cart;
  products!: Product;
  activeTab: string = 'home';
  star = faStar;


  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
    private cartService: CartService) {

    //to read product id and bring it
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

  // to add item to cart
  addToCart() {
    if (this.productDetails) {
      this.cartService.addToCart(this.productDetails);
      this.router.navigateByUrl('/cart');
    }

  }


  // to update quantity
  changeQuantity(quantityInString: string) {
    if (this.productDetails) {
      const quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(this.productDetails.id, quantity);
      this.setCart();
    }
  }

  //   to handle tabs in description area using angular materials
  changeTab(tab: string) {
    this.activeTab = tab;
  }

}