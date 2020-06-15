import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ContentfulService } from '../../contentful.service';
import { Entry } from 'contentful';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  musicPosts: Entry<any>[] = [];
  musicCategories: Entry<any>[] = [];
  postedAt = document.getElementsByClassName("posted-at");

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getMusicPosts()
      .then(musicPosts => this.musicPosts = musicPosts);

    this.contentfulService.getMusicCategories()
      .then(musicCategories => this.musicCategories = musicCategories);
  }

  goToDetail(postId) {
    this.router.navigate(['/creations/music/detail', postId]);
  }

  goToMusicCategory(categoryId) {
    this.router.navigate(['/creations/music/category', categoryId]);

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
    for (let i = 0, max = this.postedAt.length; i < max; i++) {
      if(this.postedAt[i].parentNode.parentNode === e.target) {
        this.postedAt[i].classList.remove('fadeout');
        this.postedAt[i].classList.add('fadein');
      }
    }
  }

  hideDates(e: any): void {
    for (let i = 0, max = this.postedAt.length; i < max; i++) {
      if(this.postedAt[i].parentNode.parentNode === e.target) {
        this.postedAt[i].classList.remove('fadein');
        this.postedAt[i].classList.add('fadeout');
      }
    }
  }

}
