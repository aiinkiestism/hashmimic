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
// import { CalligraphyComponent } from './creations/calligraphy/calligraphy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'creations/blog', component: BlogComponent },
  { path: 'creations/blog/post/:id', component: PostComponent },
  { path: 'creations/blog/category/all', redirectTo: '/creations/blog', pathMatch: 'full' },
  { path: 'creations/blog/category/:id', component: CategoryComponent },
  { path: 'creations/music', component: MusicComponent },
  { path: 'creations/software', component: SoftwareComponent },
  { path: 'creations/business', component: BusinessComponent },
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
