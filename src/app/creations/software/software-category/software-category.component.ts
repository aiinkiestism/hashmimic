import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, NavigationStart } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-software-category',
  templateUrl: './software-category.component.html',
  styleUrls: ['./software-category.component.scss']
})
export class SoftwareCategoryComponent implements OnInit {

  posts: Entry<any>[] = [];
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
    this.contentfulService.getSoftwareCategory(categoryId)
      .then((category) => {
        this.category = category;
        // console.log(category);
      });

    this.contentfulService.getSoftwarePosts()
      .then(posts => this.posts = posts);

    this.contentfulService.getSoftwareCategories()
      .then(categories => this.categories = categories);

    window.addEventListener("load", (): void => {
      this.showCatePosts();
    });

  }

  goToDetail(postId) {
    this.router.navigate(['/creations/software/detail', postId]);
  }

  goToSoftwareCategory(categoryId) {
    this.router.navigate(['/creations/software/category', categoryId]);
    this.showCatePosts();
  }

  showDates(e: any): void {
    for (let i = 0, max = this.publishedAt.length; i < max; i++) {
      if(this.publishedAt[i].parentNode.parentNode.parentNode.parentNode === e.target) {
        this.publishedAt[i].classList.remove('fadeout');
        this.publishedAt[i].classList.add('fadein');
      }
    }
  }

  hideDates(e: any): void {
    for (let i = 0, max = this.publishedAt.length; i < max; i++) {
      if(this.publishedAt[i].parentNode.parentNode.parentNode.parentNode === e.target) {
        this.publishedAt[i].classList.remove('fadein');
        this.publishedAt[i].classList.add('fadeout');
      }
    }
  }

  showCatePosts(): void {
    try {
      for (let i = 0, max = this.bgOuter.length; i < max; i++) {
        console.log(this.bgOuter[i].lastElementChild.lastElementChild);
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
