import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Product } from '../../shared/models/Product';
import CartItem from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() { }

  // to add items to cart
  addToCart(product: Product): void {
    let CartItems = this.cart.items.find(item => item.product.id === product.id);
    if (CartItems) {
      this.changeQuantity(product.id, CartItems.product.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));

  }

  // to remove items from cart
  removeFromCart(productId: string): void {
    this.cart.items = this.cart.items.filter(item => item.product.id != productId);
  }

  //to update quantity
  changeQuantity(productId: string, quantity: number) {
    let CartItem = this.cart.items.find(item => item.product.id === productId);
    if (!CartItem) return;
    CartItem.product.quantity = quantity;
  }

  // To display Cart items
  getCart(): Cart {
    return this.cart;
  }
}
