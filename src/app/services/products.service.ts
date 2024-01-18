import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   // fetch api
   productsApiUrl = "http://localhost:3000/products";

   constructor() { }
 
   //Get All Products in shop page
   async getAllProducts(): Promise<Product[]> {
     const data = await fetch(this.productsApiUrl)
     return await data.json() ?? [];
   }
 
   // get product by ID for single product
 
   async getProductById(id: number): Promise<Product | undefined> {
     const data = await fetch(`${this.productsApiUrl}/${id}`);
     return await data.json() ?? {};
   }
  }
