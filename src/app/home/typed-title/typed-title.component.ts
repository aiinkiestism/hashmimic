import { Component, OnInit } from '@angular/core';

// import { TypeIt } from 'typeit';
const TypeIt = require('typeit');
import { DstColorFactor } from 'three';

@Component({
  selector: 'app-typed-title',
  templateUrl: './typed-title.component.html',
  styleUrls: ['./typed-title.component.scss']
})
export class TypedTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.typedTitle();
  }

  public typedTitle() {
    new TypeIt('#home-title', {
      speed: 80,
      deleteSpeed: 40,
      startDelay: 900,
      // waitUntilVisible: true,
      loop: false,
      cursor: true,
      // afterStep: function(step, instance) {
      //   instance.getElement().style.color = this.getRandomColor();
      // }
    })
      .type("I'm a Multidisciplinary Blogger.", {delay: 1000})
      .delete(26, {delay: 1800})
      .type("Music Creator and Performer.", {delay: 1100})
      .delete(28, {delay: 1800})
      .type("Software Engineer.", {delay: 1100})
      .delete(24, {delay: 1800})
      .type("My Motivation in Life is to express what I create with time and effort, ", {delay: 1100})
      .type("and be appreciated and moved by you.", {delay: 1100})
      .go();
  }

  getRandomColor() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    for (let count = color.length; count < 6; count++) {
      color = "0" + color;
    }
    return "#" + color;
  }

}
