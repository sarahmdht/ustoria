import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/models/Product';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [SideBarComponent, RouterLink],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  productId: number | undefined;
  productDetails: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService) {
    this.activatedRoute.params.subscribe(params => {
      this.productId = Number(params['id']);
      this.productService.getProductById(this.productId).then((product) => {
        this.productDetails = product;
      })

    })
  }
}
