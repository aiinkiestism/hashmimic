const TypeIt = require('typeit');


export function typedTitle() {
  let homeTitle = document.getElementById("home-title");
  if (homeTitle.textContent === '') {
    new TypeIt('#home-title', {
      speed: 50,
      deleteSpeed: 30,
      startDelay: 900,
      // waitUntilVisible: true,
      loop: false,
      cursor: true,
      // afterStep: function(step, instance) {
      //   instance.getElement().style.color = this.getRandomColor();
      // }
    })
      // .type("I'm a Multidisciplinary Blogger.", {delay: 1000})
      // .delete(26, {delay: 1800})
      // .type("Music Creator and Performer.", {delay: 1100})
      // .delete(28, {delay: 1800})
      .type("I'm a Music Creator and Performer.", {delay: 1100})
      .delete(28, {delay: 1800})
      // .type("Software Engineer.", {delay: 1100})
      // .delete(18, {delay: 1800})
      .type("Software Engineer.", {delay: 1100})
      .delete(24, {delay: 1800})
      // .type("Design Engineer.", {delay: 1100})
      // .delete(16, {delay: 1800})
      // .type("Product Manager.", {delay: 1100})
      // .delete(16, {delay: 1800})
      // .type("Researcher.", {delay: 1100})
      // .delete(11, {delay: 1800})
      // .type("Business Architect.", {delay: 1100})
      // .delete(25, {delay: 1800})
      // .type("Serial Entrepreneur.", {delay: 1100})
      // .delete(20, {delay: 1800})
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
