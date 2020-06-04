'use strict';
import { typedTitle } from './objects2D/typed-title';
import { intro } from './objects3D/intro';
import { replacedCursor } from './objects2D/replaced-cursor';


window.addEventListener("DOMContentLoaded", () => {
  // let homeGnav = document.getElementById("home-gnav");
  let logoGnav = document.getElementById("logo-gnav");

  // homeGnav.addEventListener("mouseenter", () => {
  //   let currentPathname = location.pathname;
  //   if (currentPathname !== '/') {
  //     homeGnav.addEventListener("click", () => {
  //       intro();
  //       typedTitle();
  //     });
  //   }
  // });

  logoGnav.addEventListener("mouseenter", () => {
    let currentPathname = location.pathname;
    if (currentPathname !== '/') {
      logoGnav.addEventListener("click", () => {
        intro();
        typedTitle();
      });
    }
  });

});

window.addEventListener("DOMContentLoaded", intro);

window.onload = ():void => {

  let loadingWrapper = document.getElementById("loading-wrapper"),
      contents = document.getElementById("contents");

  contents.setAttribute('style', "display: block; height: 100vh; overflow-y: scroll;");
  loadingWrapper.classList.add('fadeout');
  setTimeout(():void => {
    loadingWrapper.setAttribute('style', "display: none;");
  }, 500);

  // replacedCursor();

  typedTitle();

}

