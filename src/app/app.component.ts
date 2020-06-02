import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
// import { ComponentPortal } from '@angular/cdk/portal';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hashmimic.com';
  // homeGnav = document.getElementById("home-gnav");
  // meGnav = document.getElementById("me-gnav");
  snLink = document.getElementsByClassName("sn-link");

  // overlayRef = this.overlay.create({
  //   hasBackdrop: true,
  //   positionStrategy: this.overlay
  //     .position().global().centerHorizontally().centerVertically()
  // });

  constructor(
    private router: Router,
    // private overlay: Overlay
  ) {
  }

  ngOnInit() {
    // this.overlayRef.attach(new ComponentPortal(MatProgressSpinnerModule));
    // setTimeout(() => {
    //   this.overlayRef.detach();
    // }, 3000);

    // this.homeGnav.addEventListener("click", () => {

    // });

    // this.meToggle();

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        document.getElementById('sidenav-content')!.scrollTo(0, 0);
      }
    });

  }

  onMe(): void {
    for (let i = 0, max = this.snLink.length; i < max; i++) {

      this.snLink[i].setAttribute('style', "cursor: pointer;");
      switch (i) {
        case 0:
          this.snLink[i].classList.add('me-fadein');
          break;
        default:
          setTimeout(():void => {
            this.snLink[i].classList.add('me-fadein');
          }, 30);
      }

    }
  }

  offMe(): void {
    for (let i = 0, max = this.snLink.length; i < max; i++) {

      setTimeout(():void => {
        switch (i) {
          case 0:
            this.snLink[i].classList.remove('me-fadein');
            break;
          default:
            setTimeout(():void => {
              this.snLink[i].classList.remove('me-fadein');
            }, 30);
        }
        this.snLink[i].setAttribute('style', "cursor: default;");
      }, 1200);

    }
  }

}
