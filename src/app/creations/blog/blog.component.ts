import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful';

export let postSlug: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Entry<any>[] = [];
  categories: Entry<any>[] = [];

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

}
