import { Product } from "./Product";

export default class CartItem {
    id!: number;
    product: Product;
   

    constructor(product: Product){
        this.product = product;
        this.totalitem;
        this.price
        
    }

    get price(): number {
        return this.product.discount ? this.product.discount : this.product.price;
    }
     get totalitem(): number {
        return this.price * this.product.quantity;
    }
}