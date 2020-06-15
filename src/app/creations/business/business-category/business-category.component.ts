import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, NavigationStart } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-business-category',
  templateUrl: './business-category.component.html',
  styleUrls: ['./business-category.component.scss']
})
export class BusinessCategoryComponent implements OnInit {

  posts: Entry<any>[] = [];
  categories: Entry<any>[] = [];
  category: Entry<any>;
  dates = document.getElementsByClassName("dates");
  pubCategoryId;
  bgOuter = document.getElementsByClassName("bg-outer");
  mySubscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService,
    public changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    this.pubCategoryId = categoryId;
    this.contentfulService.getBusinessCategory(categoryId)
      .then((category) => {
        this.category = category;
        // console.log(category);
      });

    this.contentfulService.getBusinessPosts()
      .then(posts => this.posts = posts);

    this.contentfulService.getBusinessCategories()
      .then(categories => this.categories = categories);

    window.addEventListener("load", () => {
      this.showCatePosts();
    });

    this.showCatePosts();

  }

  goToDetail(postId) {
    this.router.navigate(['/creations/business/detail', postId]);
  }

  goToBusinessCategory(categoryId) {
    this.router.navigate(['/creations/business/category', categoryId]);
    this.showCatePosts();
  }

  showDates(e: any): void {
    for(let i = 0, max = this.dates.length; i < max; i++) {
      if(this.dates[i].parentNode.parentNode.parentNode.parentNode === e.target) {
        this.dates[i].classList.remove('fadeout');
        this.dates[i].classList.add('fadein');
      }
    }
  }

  hideDates(e: any): void {
    for(let i = 0, max = this.dates.length; i < max; i++) {
      if(this.dates[i].parentNode.parentNode.parentNode.parentNode === e.target) {
        this.dates[i].classList.remove('fadein');
        this.dates[i].classList.add('fadeout');
      }
    }
  }

  showCatePosts(): void {
    try {
      for(let i = 0, max = this.bgOuter.length; i < max; i++) {
        if(this.bgOuter[i].lastElementChild.lastElementChild === null) {
          this.bgOuter[i].setAttribute('style', "display: none;");
        } else {
          continue;
        }
      }
    } catch(e) {
      console.log("This is not the category page.");
    }
  }

}
