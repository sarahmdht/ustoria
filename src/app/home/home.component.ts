import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SliderCarouselComponent } from '../slider-carousel/slider-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SliderCarouselComponent, RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
