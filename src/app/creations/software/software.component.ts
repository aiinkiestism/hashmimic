import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  softwarePosts: Entry<any>[] = [];
  softwareCategories: Entry<any>[] = [];
  publishedAt = document.getElementsByClassName("published-at");

  constructor(
    private router: Router,
    private contentfulService: ContentfulService,
  ) { }

  ngOnInit(): void {
    this.contentfulService.getSoftwarePosts()
      .then(softwarePosts => this.softwarePosts = softwarePosts);

    this.contentfulService.getMusicCategories()
      .then(softwareCategories => this.softwareCategories = softwareCategories);
  }

  goToDetail(postId) {
    this.router.navigate(['/creations/software/detail', postId]);
  }

  goToSoftwareCategory(categoryId) {
    this.router.navigate(['/creations/software/category', categoryId]);

    setTimeout((): void => {
      try {
        let bgOuter = document.getElementsByClassName("bg-outer");
        for (let i = 0, max = bgOuter.length; i < max; i++) {
          console.log(bgOuter[i].lastElementChild.lastElementChild);
          if(bgOuter[i].lastElementChild.lastElementChild === null) {
            bgOuter[i].setAttribute('style', "display: none;");
          } else {
            continue;
          }
        }
      } catch(e) {
        console.log("This is not the category page.");
      }
    }, 100);

  }

  showDates(e: any): void {
    for (let i = 0, max = this.publishedAt.length; i < max; i++) {
      if(this.publishedAt[i].parentNode.parentNode === e.target) {
        this.publishedAt[i].classList.remove('fadeout');
        this.publishedAt[i].classList.add('fadein');
      }
    }
  }

  hideDates(e: any): void {
    for (let i = 0, max = this.publishedAt.length; i < max; i++) {
      if(this.publishedAt[i].parentNode.parentNode === e.target) {
        this.publishedAt[i].classList.remove('fadein');
        this.publishedAt[i].classList.add('fadeout');
      }
    }
  }

}
