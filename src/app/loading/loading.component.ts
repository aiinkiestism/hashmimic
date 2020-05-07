import { Component, OnInit, ChangeDetectionStrategy, Inject, InjectionToken, Optional } from '@angular/core';
// import { ThemePalette } from '@angular/material';

// export interface SpinnerLoadingOptions {
//   color?: ThemePalette;
//   diameter?: number;
//   strokeWidth?: number;
// }

// const DEFAULT_OPTIONS: SpinnerLoadingOptions = {
//   color: 'primary',
//   diameter: 40,
//   strokeWidth: 4,
// }

// export const SPINNER_LOADING_OPTIONS = new InjectionToken<SpinnerLoadingOptions>('SPINNER_LOADING_OPTIONS');

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  // color: ThemePalette;
  // diameter: number;
  // strokeWidth: number;

  // constructor(@Optional() @Inject(SPINNER_LOADING_OPTIONS) options?: SpinnerLoadingOptions) {
  //   options = Object.assign({}, DEFAULT_OPTIONS, options || {});
  //   this.color = options.color;
  //   this.diameter = options.diameter;
  //   this.strokeWidth = options.strokeWidth;
  // }

  ngOnInit(): void {
  }

}
