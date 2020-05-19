import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sp-me-toggle',
  templateUrl: './sp-me-toggle.component.html',
  styleUrls: ['./sp-me-toggle.component.scss']
})
export class SpMeToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSpMe(): void {
    let hamBtn = document.getElementById("hamburger");
    let menuBg = document.getElementById("menu-bg");

    hamBtn.classList.toggle('is-active');
    menuBg.classList.toggle('me-active');
  }

}
