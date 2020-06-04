import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  posts: Entry<any>[] = [];
  categories: Entry<any>[] = [];
  category: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getCategory(categoryId)
      .then((category) => {
        this.category = category;
        console.log(this.category);
      });

    this.contentfulService.getPosts()
      .then(posts => this.posts = posts);

    this.contentfulService.getCategories()
    .then(categories => this.categories = categories);

  }

  goToPost(postId) {
    this.router.navigate(['/creations/blog/post', postId]);
  }

  goToCategory(categoryId) {
    this.router.navigate(['/creations/blog/category', categoryId]);
  }

}
