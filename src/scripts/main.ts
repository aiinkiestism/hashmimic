'use strict';
import { typedTitle } from './objects2D/typed-title';
import { homeWebgl } from './objects3D/home';
import { replacedCursor } from './objects2D/replaced-cursor';


window.addEventListener("DOMContentLoaded", () => {
  // let homeGnav = document.getElementById("home-gnav");
  // let logoGnav = document.getElementById("logo-gnav");

  // homeGnav.addEventListener("mouseenter", () => {
  //   let currentPathname = location.pathname;
  //   if (currentPathname !== '/') {
  //     homeGnav.addEventListener("click", () => {
  //       homeWebgl();
  //       typedTitle();
  //     });
  //   }
  // });
  try {
    let logoGnav = document.getElementById("logo-gnav");
    logoGnav.addEventListener("mouseenter", () => {
      let currentPathname = location.pathname;
      if (currentPathname !== '/') {
        logoGnav.addEventListener("click", () => {
          homeWebgl();
          typedTitle();
        });
      }
    });
  } catch(e) {
    console.log("This is not the top page.");
  }

  try {
    let notFoundToHome = document.getElementById("not-found-to-home");
    notFoundToHome.addEventListener("click", () => {
      homeWebgl();
      typedTitle();
    });
  } catch(e) {
    console.log("This is not the 404 page.");
  }

});

try {
  window.addEventListener("DOMContentLoaded", homeWebgl);
} catch(e) {
  console.log("This is not the top page.");
}

window.onload = ():void => {

  let loadingWrapper = document.getElementById("loading-wrapper"),
      contents = document.getElementById("contents");

  contents.setAttribute('style', "display: block; height: 100vh; overflow-y: scroll;");
  loadingWrapper.classList.add('fadeout');
  setTimeout(():void => {
    loadingWrapper.setAttribute('style', "display: none;");
  }, 500);

  // replacedCursor();

  try {
    typedTitle();
  } catch(e) {
    console.log("This is not the top page.");
  }

}

