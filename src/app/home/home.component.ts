import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// components
import { BxsliderComponent } from '../bxslider/bxslider.component';
import { TopSellerComponent } from '../top-seller/top-seller.component';
import { TopNewComponent } from '../top-new/top-new.component';
import { RecentlyViewedComponent } from '../recently-viewed/recently-viewed.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { PromoAreaComponent } from '../promo-area/promo-area.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BxsliderComponent,
    TopSellerComponent,
    TopNewComponent,
    RecentlyViewedComponent,
    RouterOutlet,
    CommonModule,
    PromoAreaComponent,
    MainContentComponent,
    RouterLink,
    RouterModule,
    CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
