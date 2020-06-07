import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.scss']
})
export class BusinessDetailComponent implements OnInit {

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
    this.contentfulService.getBusinessPost(postId)
      .then((post) => {
        this.post = post;
        // console.log(this.post);
      });

    const categoryId = this.route.snapshot.paramMap.get('id');
    this.pubCategoryId = categoryId;
    this.contentfulService.getBusinessCategory(categoryId)
      .then((category) => {
        this.category = category;
        // console.log(category);
      });

    this.contentfulService.getBusinessCategories()
    .then(categories => this.categories = categories);

  }

  goToBusinessCategory(categoryId) {
    this.router.navigate(['/creations/business/category', categoryId]);
  }

}
