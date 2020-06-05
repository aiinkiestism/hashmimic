import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Entry<any>[] = [];
  categories: Entry<any>[] = [];
  publishedAt = document.getElementsByClassName("published-at");

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getPosts()
      .then(posts => this.posts = posts);

    this.contentfulService.getCategories()
      .then(categories => this.categories = categories);
  }

  // goToPost(slug: any) {
  //   this.router.navigate(['/creations/blog/post', slug]);
  // }

  goToPost(postId) {
    this.router.navigate(['/creations/blog/post', postId]);
  }

  goToCategory(categoryId) {
    this.router.navigate(['/creations/blog/category', categoryId]);
  }

  showDates(e: any): void {
    for(let i = 0, max = this.publishedAt.length; i < max; i++) {
      if(this.publishedAt[i].parentNode.parentNode === e.target) {
        this.publishedAt[i].classList.remove('fadeout');
        this.publishedAt[i].classList.add('fadein');
      }
    }
  }

  hideDates(e: any): void {
    for(let i = 0, max = this.publishedAt.length; i < max; i++) {
      if(this.publishedAt[i].parentNode.parentNode === e.target) {
        this.publishedAt[i].classList.remove('fadein');
        this.publishedAt[i].classList.add('fadeout');
      }
    }
  }

}
