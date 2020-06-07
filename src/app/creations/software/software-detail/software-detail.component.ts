import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-software-detail',
  templateUrl: './software-detail.component.html',
  styleUrls: ['./software-detail.component.scss']
})
export class SoftwareDetailComponent implements OnInit {

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
    this.contentfulService.getSoftwarePost(postId)
      .then((post) => {
        this.post = post;
        // console.log(this.post);
      });

    const categoryId = this.route.snapshot.paramMap.get('id');
    this.pubCategoryId = categoryId;
    this.contentfulService.getSoftwareCategory(categoryId)
      .then((category) => {
        this.category = category;
        // console.log(category);
      });

    this.contentfulService.getSoftwareCategories()
    .then(categories => this.categories = categories);

  }

  goToSoftwareCategory(categoryId) {
    this.router.navigate(['/creations/software/category', categoryId]);
  }

}
