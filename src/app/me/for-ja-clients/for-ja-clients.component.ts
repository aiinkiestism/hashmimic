import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-for-ja-clients',
  templateUrl: './for-ja-clients.component.html',
  styleUrls: ['./for-ja-clients.component.scss']
})
export class ForJaClientsComponent implements OnInit {

  contents = document.getElementById("contents");
  main = document.getElementById("main");

  constructor(
    private router: Router
  ) { 
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => {
        this.contents.setAttribute('style', "background: #000; display: block; height: 100vh; overflow-y: scroll;");
        this.main.setAttribute('style', "background: #000; padding-bottom: 0px;");
      })

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        console.log('why scroll is failing..');
        window.scroll(0, 0);
        console.log('why scroll is failing..');
      });
  }

  ngOnInit(): void {
    this.contents.setAttribute('style', "background: transparent; display: block; height: 100vh; overflow-y: scroll;");
    this.main.setAttribute('style', "background: radial-gradient(65.36% 65.36% at 50.04% 34.64%, rgba(31, 86, 251, 0.55) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFEDED 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 0, 123, 0.75); padding-bottom: 1px;");
  }

}
