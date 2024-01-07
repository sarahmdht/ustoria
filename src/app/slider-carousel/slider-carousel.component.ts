import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-slider-carousel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './slider-carousel.component.html',
  styleUrl: './slider-carousel.component.css'
})
export class SliderCarouselComponent {
left = faAngleLeft;
right = faAngleRight;
}
