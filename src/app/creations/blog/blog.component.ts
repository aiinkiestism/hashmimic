import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getPosts()
      .then(posts => this.posts = posts);
  }

  goToPost(postId) {
    console.log(postId);
    this.router.navigate(['/post', postId]);
  }

}
