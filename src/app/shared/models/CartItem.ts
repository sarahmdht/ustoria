import { CartComponent } from "../../cart/cart.component";
import { Product } from "./Product";

export default class CartItem {
    id!: number;
    product: Product;
   

    constructor(product: Product){
        this.product = product;
        this.price;
        this.product.discount;
        
    }

    get price(): number {
        return this.product.discount ? this.product.discount : this.product.price;
    }
}