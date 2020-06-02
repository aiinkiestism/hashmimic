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
        console.log(this.post);
      });
  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }

}
