import { Component, OnInit, Input } from '@angular/core';

import { ItemData } from '../data/item-data';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {
  @Input() data: ItemData;

  constructor() { }

  ngOnInit(): void {
  }

}
