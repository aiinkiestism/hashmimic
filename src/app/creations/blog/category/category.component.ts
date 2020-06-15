import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, NavigationStart } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  catePosts: Entry<any>[] = [];
  categories: Entry<any>[] = [];
  category: Entry<any>;
  publishedAt = document.getElementsByClassName("published-at");
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
    this.contentfulService.getCategory(categoryId)
      .then((category) => {
        this.category = category;
        // console.log(category);
      });

    this.contentfulService.getCatePosts()
      .then(catePosts => this.catePosts = catePosts);

    this.contentfulService.getCategories()
      .then(categories => this.categories = categories);

    window.addEventListener("load", () => {
      this.showCatePosts();
    });

    this.showCatePosts();

  }

  goToPost(postId) {
    this.router.navigate(['/creations/blog/post', postId]);
  }

  goToCategory(categoryId) {
    this.router.navigate(['/creations/blog/category', categoryId]);
    this.showCatePosts();
  }

  showDates(e: any): void {
    for(let i = 0, max = this.publishedAt.length; i < max; i++) {
      if(this.publishedAt[i].parentNode.parentNode.parentNode.parentNode === e.target) {
        this.publishedAt[i].classList.remove('fadeout');
        this.publishedAt[i].classList.add('fadein');
      }
    }
  }

  hideDates(e: any): void {
    for(let i = 0, max = this.publishedAt.length; i < max; i++) {
      if(this.publishedAt[i].parentNode.parentNode.parentNode.parentNode === e.target) {
        this.publishedAt[i].classList.remove('fadein');
        this.publishedAt[i].classList.add('fadeout');
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
