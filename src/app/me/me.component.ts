import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  main = document.getElementById("main");

  constructor(
    private router: Router
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => this.main.setAttribute('style', "background: #000; padding-bottom: 0px;") );
    
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        console.log('why scroll is failing..');
        window.scroll(0, 0);
        console.log('why scroll is failing..');
      });
  }

  ngOnInit(): void {
    this.main.setAttribute('style', "background: linear-gradient(#000 0%, #536AFC 35%, #FF007B 100%); padding-bottom: 1px;");
  }

}
