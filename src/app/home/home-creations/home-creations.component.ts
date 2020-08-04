import { Component, OnInit, Input } from '@angular/core';

import { ItemData } from '../../models/item-data';

@Component({
  selector: 'app-home-creations',
  templateUrl: './home-creations.component.html',
  styleUrls: ['./home-creations.component.scss']
})
export class HomeCreationsComponent implements OnInit {
  @Input() data: ItemData;

  constructor() { }

  ngOnInit(): void {
  }

}
