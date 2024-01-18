import { Component, ElementRef, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-slider-carousel',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './slider-carousel.component.html',
  styleUrl: './slider-carousel.component.css'
})
export class SliderCarouselComponent {
left = faAngleLeft;
right = faAngleRight;
circle = faCircle;

}
