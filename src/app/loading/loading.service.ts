// import { Injectable, Injector } from '@angular/core';
// import { Overlay } from '@angular/cdk/overlay';
// import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
// import {
//   LoadingComponent,
//   SPINNER_LOADING_OPTIONS,
//   SpinnerLoadingOptions
// } from './loading.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoadingService {

//   constructor(
//     private readonly _injector: Injector,
//     private readonly _overlay: Overlay
//   ) { }

//   public show(options?: SpinnerLoadingOptions): LoadingRef {
//     const injector = new PortalInjector(this._injector, new WeakMap([
//       [SPINNER_LOADING_OPTIONS, options]
//     ]))
//     const portal = new ComponentPortal(LoadingComponent, null, injector);

//     const overlayRef = this._createOverlay();
//     overlayRef.attach(portal);

//     return close() {
//       overlayRef.detach();
//       overlayRef.dispose();
//     }
//   }

//   private _createOverlay(): OverlayRef {
//     return this._overlay.create({
//       width: '100%',
//       height: '100%',
//       hasBackdrop: true,
//       panelClass: 'app-loading',
//       backdropClass: 'app-loading-backdrop',
//     });
//   }

// }
