import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  businessPosts: Entry<any>[] = [];
  businessCategories: Entry<any>[] = [];
  dates = document.getElementsByClassName("dates");

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getBusinessPosts()
      .then(businessPosts => this.businessPosts = businessPosts);

    this.contentfulService.getBusinessCategories()
      .then(businessCategories => this.businessCategories = businessCategories);
  }

  goToDetail(postId) {
    this.router.navigate(['/creations/business/detail', postId]);
  }

  goToBusinessCategory(categoryId) {
    this.router.navigate(['/creations/business/category', categoryId]);

    setTimeout((): void => {
      try {
        let bgOuter = document.getElementsByClassName("bg-outer");
        for (let i = 0, max = bgOuter.length; i < max; i++) {
          console.log(bgOuter[i].lastElementChild.lastElementChild);
          if(bgOuter[i].lastElementChild.lastElementChild === null) {
            bgOuter[i].setAttribute('style', "display: none;");
          } else {
            continue;
          }
        }
      } catch(e) {
        console.log("This is not the category page.");
      }
    }, 100);
  }

  showDates(e: any): void {
    for (let i = 0, max = this.dates.length; i < max; i++) {
      if(this.dates[i].parentNode.parentNode === e.target) {
        this.dates[i].classList.remove('fadeout');
        this.dates[i].classList.add('fadein');
      }
    }
  }

  hideDates(e: any): void {
    for (let i = 0, max = this.dates.length; i < max; i++) {
      if(this.dates[i].parentNode.parentNode === e.target) {
        this.dates[i].classList.remove('fadein');
        this.dates[i].classList.add('fadeout');
      }
    }
  }

}
