import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
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
  }

  ngOnInit(): void {
    this.main.setAttribute('style', "background: linear-gradient(#000 0%, #536AFC 55%, #FF007B 100%); padding-bottom: 1px;");
  }

}
