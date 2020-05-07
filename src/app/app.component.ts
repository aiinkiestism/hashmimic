import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
// import { ComponentPortal } from '@angular/cdk/portal';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hashmimic.com';

  // overlayRef = this.overlay.create({
  //   hasBackdrop: true,
  //   positionStrategy: this.overlay
  //     .position().global().centerHorizontally().centerVertically()
  // });

  constructor(
    private router: Router,
    // private overlay: Overlay
  ) {}

  ngOnInit() {
    // this.overlayRef.attach(new ComponentPortal(MatProgressSpinnerModule));
    // setTimeout(() => {
    //   this.overlayRef.detach();
    // }, 3000);

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        document.getElementById('sidenav-content')!.scrollTo(0, 0);
      }
    });
  }

}
