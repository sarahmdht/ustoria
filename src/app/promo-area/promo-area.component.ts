import { Component } from '@angular/core';
// font awesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-promo-area',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './promo-area.component.html',
  styleUrl: './promo-area.component.css'
})
export class PromoAreaComponent {
  refresh = faRefresh;
  truck = faTruck;
  gift = faGift;
  lock = faLock
}
