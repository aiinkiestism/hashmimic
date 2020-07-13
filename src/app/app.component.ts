import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterOutlet } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
// import { ComponentPortal } from '@angular/cdk/portal';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { Observable } from 'rxjs';
import { routingAnimation } from './animations';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routingAnimation
  ]
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
    // private overlay: Overlay,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
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

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)).subscribe((event) => {
        this.updateMeta(event['title'], event['description'], ['url'], ['image'], ['twittercard'], ['twittersite']);
      });

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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  updateMeta(title: string, desc: string, url: any, image: any, twittercard: any, twittersite: any) {
    this.titleService.setTitle(title);
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: twittercard });
    this.meta.updateTag({ name: 'twitter:site', content: twittersite });
  }

}
