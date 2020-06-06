import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Entry<any>;
  categories: Entry<any>[] = [];
  category: Entry<any>;
  pubCategoryId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getPost(postId)
      .then((post) => {
        this.post = post;
        // console.log(this.post);
      });

    const categoryId = this.route.snapshot.paramMap.get('id');
    this.pubCategoryId = categoryId;
    this.contentfulService.getCategory(categoryId)
      .then((category) => {
        this.category = category;
        // console.log(category);
      });

    this.contentfulService.getCategories()
    .then(categories => this.categories = categories);

  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }

  goToCategory(categoryId) {
    this.router.navigate(['/creations/blog/category', categoryId]);
  }

}
