import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../../../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.scss']
})
export class MusicDetailComponent implements OnInit {

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
    this.contentfulService.getMusicPost(postId)
      .then((post) => {
        this.post = post;
        // console.log(this.post);
      });

    const categoryId = this.route.snapshot.paramMap.get('id');
    this.pubCategoryId = categoryId;
    this.contentfulService.getMusicCategory(categoryId)
      .then((category) => {
        this.category = category;
        // console.log(category);
      });

    this.contentfulService.getMusicCategories()
    .then(categories => this.categories = categories);

  }

  goToMusicCategory(categoryId) {
    this.router.navigate(['/creations/music/category', categoryId]);
  }

}
