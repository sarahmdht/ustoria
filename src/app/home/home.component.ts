import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// components and services
import { SliderCarouselComponent } from '../slider-carousel/slider-carousel.component';
import { TopSellerComponent } from '../top-seller/top-seller.component';
import { TopNewComponent } from '../top-new/top-new.component';
import { RecentlyViewedComponent } from '../recently-viewed/recently-viewed.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { PromoAreaComponent } from '../promo-area/promo-area.component';
import CartItem from '../shared/models/CartItem';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderCarouselComponent,
    TopSellerComponent,
    TopNewComponent,
    RecentlyViewedComponent,
    RouterOutlet,
    CommonModule,
    PromoAreaComponent,
    MainContentComponent,
    RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
     
}
