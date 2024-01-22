import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

declare var $: any;

@Component({
  selector: 'app-bxslider',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './bxslider.component.html',
  styleUrl: './bxslider.component.css'
})
export class BxsliderComponent {
  constructor() {
    $(document).ready(function () {
      const slider = ($('#bxslider-home4') as any).bxSlider({
        auto: true,
        nextText: ">",
        prevText: "<",
      });
    });
  }

  right = faAngleRight;
  left = faAngleLeft;

}
