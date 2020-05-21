import { Component, OnInit, Input } from '@angular/core';

import { ItemData } from '../../data/item-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() data: ItemData;

  constructor() { }

  ngOnInit(): void {
  }

}
