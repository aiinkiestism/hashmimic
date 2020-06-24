import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationsComponent } from './creations/creations.component';
import { BlogComponent } from './creations/blog/blog.component';
import { PostComponent } from './creations/blog/post/post.component';
import { CategoryComponent } from './creations/blog/category/category.component';
import { MusicComponent } from './creations/music/music.component';
import { SoftwareComponent } from './creations/software/software.component';
import { BusinessComponent } from './creations/business/business.component';
import { MusicDetailComponent } from './creations/music/music-detail/music-detail.component';
import { MusicCategoryComponent } from './creations/music/music-category/music-category.component';
import { SoftwareDetailComponent } from './creations/software/software-detail/software-detail.component';
import { SoftwareCategoryComponent } from './creations/software/software-category/software-category.component';
import { BusinessDetailComponent } from './creations/business/business-detail/business-detail.component';
import { BusinessCategoryComponent } from './creations/business/business-category/business-category.component';
import { MeComponent } from './me/me.component';
import { ForClientsComponent } from './me/for-clients/for-clients.component';
import { ForJaClientsComponent } from './me/for-ja-clients/for-ja-clients.component';
import { ForRecruitersComponent } from './me/for-recruiters/for-recruiters.component';
import { ForJaRecruitersComponent } from './me/for-ja-recruiters/for-ja-recruiters.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { CalligraphyComponent } from './creations/calligraphy/calligraphy.component';


const routes: Routes = [
  { path: '', component: HomeComponent, 
    data: {
      title: 'Hashmimic.com',
      description: "Hashmimic.com is a Japanese multi-creator's website.",
      url: 'https://hashmimic.com',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'me', component: MeComponent,
    data: {
      title: 'Hashmimic.com/me',
      description: "This is the page about me, hashmimic",
      url: 'https://hashmimic.com/me',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'me/for-clients', component: ForClientsComponent,
    data: {
      title: 'For Clients',
      description: "Dear Clients from Hashmimic",
      url: 'https://hashmimic.com/for-clients',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'me/for-ja-clients', component: ForJaClientsComponent,
    data: {
      title: 'For Japanese Clients',
      description: "Dear Japanese Clients from Hashmimic",
      url: 'https://hashmimic.com/for-ja-clients',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'me/for-recruiters', component: ForRecruitersComponent,
    data: {
      title: 'For Recruiters',
      description: "Dear Recruiters from Hashmimic",
      url: 'https://hashmimic.com/for-recruiters',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'me/for-ja-recruiters', component: ForJaRecruitersComponent,
    data: {
      title: 'For Japanese Recruiters',
      description: "Dear Japanese Recruiters from Hashmimic",
      url: 'https://hashmimic.com/for-ja-recruiters',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations', component: CreationsComponent,
    data: {
      title: "Hashmimic Creations",
      description: "Creations from Hashmimic",
      url: 'https://hashmimic.com/creations',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/blog', component: BlogComponent,
    data: {
      title: 'Hashmimic Blog',
      description: "Blog from Hashmimic",
      url: 'https://hashmimic.com/blog',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/blog/post/:id', component: PostComponent,
    data: {
      title: 'Hashmimic Blog Post',
      description: "Blog Post from Hashmimic",
      url: 'https://hashmimic.com/post/:id',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/blog/category/all', redirectTo: '/creations/blog', pathMatch: 'full',
    data: {
      title: 'Hashmimic Blog Category',
      description: "Blog Category in Hashmimic Blog",
      url: 'https://hashmimic.com/blog/category/all',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/blog/category/:id', component: CategoryComponent,
    data: {
      title: 'Hashmimic Blog Category',
      description: "Blog Category in Hashmimic Blog",
      url: 'https://hashmimic.com/blog/category/:id',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/music', component: MusicComponent,
    data: {
      title: 'Hashmimic Music',
      description: "Music from Hashmimic",
      url: 'https://hashmimic.com/creations/music',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/music/detail/:id', component: MusicDetailComponent,
    data: {
      title: 'Hashmimic Music Detail',
      description: "Hashmimic Music Detail",
      url: 'https://hashmimic.com/creations/music/detail/:id',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/music/category/all', redirectTo: '/creations/music', pathMatch: 'full',
    data: {
      title: 'Hashmimic Music Category',
      description: "Music Category in Hashmimic Music",
      url: 'https://hashmimic.com/creations/music/category/all',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/music/category/:id', component: MusicCategoryComponent,
    data: {
      title: 'Hashmimic Music Category',
      description: "Music Category in Hashmimic Music",
      url: 'https://hashmimic.com/creations/category/:id',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/software', component: SoftwareComponent,
    data: {
      title: 'Hashmimic Software',
      description: "Software from Hashmimic",
      url: 'https://hashmimic.com/creations/software',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/software/detail/:id', component: SoftwareDetailComponent,
    data: {
      title: 'Hashmimic Software Detail',
      description: "Hashmimic Software Detail",
      url: 'https://hashmimic.com/creations/software/detail/:id',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/software/category/all', redirectTo: 'creations/software', pathMatch: 'full',
    data: {
      title: 'Hashmimic Software Category',
      description: "Software Category in Hashmimic Software",
      url: 'https://hashmimic.com',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/software/category/:id', component: SoftwareCategoryComponent,
    data: {
      title: 'Hashmimic Software Category',
      description: "Software Category in Hashmimic Software",
      url: 'https://hashmimic.com',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/business', component: BusinessComponent,
    data: {
      title: 'Hashmimic Business',
      description: "Business from Hashmimic",
      url: 'https://hashmimic.com/creations/business',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/business/detail/:id', component: BusinessDetailComponent,
    data: {
      title: 'Hashmimic Business Detail',
      description: "Hashmimic/business/detail",
      url: 'https://hashmimic.com/creations/business/detail/:id',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/business/category/all', redirectTo: '/creations/business', pathMatch: 'full',
    data: {
      title: 'Hashmimic Business Category',
      description: "Business Category in Hashmimic Business",
      url: 'https://hashmimic.com/creations/business/category/all',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: 'creations/business/category/:id', component: BusinessCategoryComponent,
    data: {
      title: 'Hashmimic Business Category',
      description: "Business Category in Hashmimic Business",
      url: 'https://hashmimic.com/creations/business/category/all',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  // { path: 'creations/calligraphy', component: CalligraphyComponent },
  { path: '404', component: NotFoundComponent,
    data: {
      title: '404 Not Found',
      description: "404 Page in Hashmimic.com",
      url: 'https://hashmimic.com/404',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
  { path: '**', redirectTo: '/404', pathMatch: 'full',
    data: {
      title: '404 Not Found',
      description: "404 Page in Hashmimic.com",
      url: 'https://hashmimic.com/404',
      image: 'https://hashmimic.com/assets/logo.png',
      twittercard: 'summary',
      twittersite: '@hashmimic',
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
