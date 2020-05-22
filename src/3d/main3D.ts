'use strict';
import { gsap } from 'gsap';
const TypeIt = require('typeit');

window.addEventListener("DOMContentLoaded", () => {
  let logoGnav = document.getElementById("logo-gnav");

  logoGnav.addEventListener("mouseenter", () => {
    let currentPathname = location.pathname;
    if (currentPathname !== '/') {
      logoGnav.addEventListener("click", () => {
        typedTitle();
      });
    }
  });

});

window.onload = ():void => {

  let loadingWrapper = document.getElementById("loading-wrapper"),
      contents = document.getElementById("contents");
  // let cursor = document.getElementById("cursor"),
  //     stalker = document.getElementById("stalker"),
  //     cWidth = 18,
  //     sWidth = 80,
  //     delay = 15,
  //     mouseX = 0,
  //     mouseY = 0,
  //     posX = 0,
  //     posY = 0,
  //     a = document.querySelector("a");


  contents.setAttribute('style', "display: block;");
  loadingWrapper.classList.add('fadeout');
  setTimeout(():void => {
    loadingWrapper.setAttribute('style', "display: none;");
  }, 500);


  // gsap.to({}, .001, {
  //   repeat: -1,
  //   onRepeat: function() {
  //     posX += (mouseX - posX) / delay;
  //     posY += (mouseY - posY) / delay;

  //     gsap.set(stalker, {
  //       css: {
  //         left: posX - (sWidth / 2),
  //         top: posY - (sWidth / 2)
  //       }
  //     });


  //     gsap.set(cursor, {
  //       css: {
  //         left: mouseX - (cWidth / 2),
  //         top: mouseY - (cWidth - 2)
  //       }
  //     });

  //   }
  // });

  // document.addEventListener("mousemove", (e) => {
  //   mouseX = e.pageX;
  //   mouseY = e.pageY;
  // });

  // a.addEventListener("mousemove", (e) => {
  //   cursor.classList.add("on-hover");
  //   stalker.classList.add("on-hover");
  // });

  // a.addEventListener("mouseleave", (e) => {
  //   cursor.classList.remove("on-hover");
  //   stalker.classList.remove("on-hover");
  // });

  typedTitle();

}

function typedTitle() {
  let homeTitle = document.getElementById("home-title");
  if (homeTitle.textContent === '') {
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

}

function getRandomColor() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  for (let count = color.length; count < 6; count++) {
    color = "0" + color;
  }
  return "#" + color;
}
