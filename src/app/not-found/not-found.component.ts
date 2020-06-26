import { Component, OnInit } from '@angular/core';
import { notFoundWebgl } from './../../scripts/objects3D/404';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  previousUrl: string;
  contents = document.getElementById("contents");
  main = document.getElementById("main");

  constructor(
    private router: Router
    ) { 
    // router.events.pipe(
    //   filter(e => e instanceof NavigationEnd)
    //   .subscribe(e => {
    //     this.previousUrl = e.url;
    //   })
    // )
    // this.router.events.subscribe(e => {
    //   if (e instanceof NavigationEnd) {
    //     this.previousUrl = e.url;
    //   }
    // })

    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => {
        // this.contents.setAttribute('style', "background: #000;");
        this.main.setAttribute('style', "margin-top: 21%;");
      });
      
      // console.log(this.previousUrl);
  }

  ngOnInit(): void {
    // console.log("404");
    // console.log(notFoundWebgl);
    // notFoundWebgl();
    // console.log("404");
    this.contents.setAttribute('style', "background: transparent;");
    this.main.setAttribute('style', "margin-top: 0;");
  }

  goToPrevious(): void {
    console.log(this.previousUrl);
    this.router.navigateByUrl(this.previousUrl);
  }

}
