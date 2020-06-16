import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, NavigationStart } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-music-category',
  templateUrl: './music-category.component.html',
  styleUrls: ['./music-category.component.scss']
})
export class MusicCategoryComponent implements OnInit {

  posts: Entry<any>[] = [];
  categories: Entry<any>[] = [];
  category: Entry<any>;
  postedAt = document.getElementsByClassName("posted-at");
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
    this.contentfulService.getMusicCategory(categoryId)
      .then((category) => {
        this.category = category;
        // console.log(category);
      });

    this.contentfulService.getMusicPosts()
      .then(posts => this.posts = posts);

    this.contentfulService.getMusicCategories()
      .then(categories => this.categories = categories);

    window.addEventListener("load", () => {
      this.showCatePosts();
    });

    this.showCatePosts();

  }

  goToDetail(postId) {
    this.router.navigate(['/creations/music/detail', postId]);
  }

  goToMusicCategory(categoryId) {
    this.router.navigate(['/creations/music/category', categoryId]);
    this.showCatePosts();
  }

  onHover(e: any): void {
    for(let i = 0, max = this.postedAt.length; i < max; i++) {
      if(this.postedAt[i].parentNode.parentNode.parentNode.parentNode === e.target) {
        this.postedAt[i].classList.remove('fadeout');
        this.postedAt[i].classList.add('fadein');
      }
    }
  }

  offHover(e: any): void {
    for(let i = 0, max = this.postedAt.length; i < max; i++) {
      if(this.postedAt[i].parentNode.parentNode.parentNode.parentNode === e.target) {
        this.postedAt[i].classList.remove('fadein');
        this.postedAt[i].classList.add('fadeout');
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
