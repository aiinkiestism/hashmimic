import { Component, OnInit } from '@angular/core';
import { notFoundWebgl } from './../../scripts/objects3D/404';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log("404");
    // console.log(notFoundWebgl);
    // notFoundWebgl();
    // console.log("404");
  }

}
