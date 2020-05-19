import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sp-me-toggle',
  templateUrl: './sp-me-toggle.component.html',
  styleUrls: ['./sp-me-toggle.component.scss']
})
export class SpMeToggleComponent implements OnInit {
  hamBtn = document.getElementById("hamburger");

  constructor() { }

  ngOnInit(): void {
  }

  onSpMe(): void {
    let menuBg = document.getElementById("menu-bg");
    menuBg.classList.toggle('me-active');
  }

}
