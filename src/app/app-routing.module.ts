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
// import { CalligraphyComponent } from './creations/calligraphy/calligraphy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'creations/blog', component: BlogComponent },
  { path: 'creations/blog/post/:id', component: PostComponent },
  { path: 'creations/blog/category/all', redirectTo: '/creations/blog', pathMatch: 'full' },
  { path: 'creations/blog/category/:id', component: CategoryComponent },
  { path: 'creations/music', component: MusicComponent },
  { path: 'creations/music/detail/:id', component: MusicDetailComponent },
  { path: 'creations/music/category/all', redirectTo: '/creations/music', pathMatch: 'full' },
  { path: 'creations/music/category/:id', component: MusicCategoryComponent },
  { path: 'creations/software', component: SoftwareComponent },
  { path: 'creations/software/detail/:id', component: SoftwareDetailComponent },
  { path: 'creations/software/category/all', redirectTo: 'creations/software', pathMatch: 'full' },
  { path: 'creations/software/category/:id', component: SoftwareCategoryComponent },
  { path: 'creations/business', component: BusinessComponent },
  { path: 'creations/business/detail/:id', component: BusinessDetailComponent },
  { path: 'creations/business/category/all', redirectTo: '/creations/business', pathMatch: 'full' },
  { path: 'creations/business/category/:id', component: BusinessCategoryComponent },
  // { path: 'creations/calligraphy', component: CalligraphyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
