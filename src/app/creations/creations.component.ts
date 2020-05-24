import { Component, OnInit, } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSkew(e: any): void {

    let xMouse = e.pageX - e.currentTarget.getBoundingClientRect().left - (e.currentTarget.offsetWidth / 2),
        yMouse = e.pageY - window.pageYOffset - e.currentTarget.getBoundingClientRect().top - (e.currentTarget.offsetHeight / 2);

    let mouseElements = [...e.currentTarget.querySelectorAll('*[data-mouse-parallax]')];

    mouseElements.forEach((elem: any): void => {

      let factor = elem.dataset.mouseParallax,
          xFinal = xMouse * factor,
          yFinal = yMouse * factor;

      if (!elem.dataset.mouseSkew) {

        gsap.to(elem, 1.2, {
          x: xFinal,
          y: yFinal,
          skewX: xFinal * 0.2,
          skewY: xFinal * 0.2
        });

      } else {

        gsap.to(elem, 1.2, {
          x: xFinal,
          y: yFinal
        });

      }

    });

  };

  offSkew(e: any): void {

    const mouseElements = Array.from(e.currentTarget.querySelectorAll('*[data-mouse-parallax]'));

    mouseElements.forEach((elem: any) => {

      gsap.to(elem, 1.2, {
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0
      });

    });

  };

}
