'use strict';

window.onload = ():void => {
  let loadingWrapper = document.getElementById("loading-wrapper"),
  contents = document.getElementById("contents");
  contents.setAttribute('style', "display: block;");
  loadingWrapper.classList.add('fadeout');
  setTimeout(():void => {
    loadingWrapper.setAttribute('style', "display: none;");
  }, 500);
}
