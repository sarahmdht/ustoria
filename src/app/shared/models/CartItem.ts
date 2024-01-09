import { Product } from "./Product";

export default class CartItem {
    id!: number;
    product: Product;
    quantity: number = 1;

    constructor(product: Product){
        this.product = product;
        this.price;
        this.product.discount;
    }

    get price(): number {
        return this.product.discount ? this.product.discount * this.quantity : this.product.price * this.quantity;
    }
}