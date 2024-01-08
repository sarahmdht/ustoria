import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SliderCarouselComponent } from '../slider-carousel/slider-carousel.component';
import { TopSellerComponent } from '../top-seller/top-seller.component';
import { TopNewComponent } from '../top-new/top-new.component';
import { RecentlyViewedComponent } from '../recently-viewed/recently-viewed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderCarouselComponent,
    TopSellerComponent,
    TopNewComponent,
    RecentlyViewedComponent,
    RouterOutlet,
    CommonModule,
    FontAwesomeModule,
    RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  refresh = faRefresh;
  truck = faTruck;
  gift = faGift;
  lock = faLock
}
