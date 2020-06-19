import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './home/intro/intro.component';
import { HomeCreationsComponent } from './home/home-creations/home-creations.component';
import { CreationsComponent } from './creations/creations.component';
import { LoadingComponent } from './loading/loading.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { SpMeToggleComponent } from './sp-me-toggle/sp-me-toggle.component';
import { MusicComponent } from './creations/music/music.component';
import { SoftwareComponent } from './creations/software/software.component';
import { BusinessComponent } from './creations/business/business.component';
import { CalligraphyComponent } from './creations/calligraphy/calligraphy.component';
import { TypedTitleComponent } from './home/typed-title/typed-title.component';
import { BlogComponent } from './creations/blog/blog.component';
import { PostComponent } from './creations/blog/post/post.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { CategoryComponent } from './creations/blog/category/category.component';
import { MusicCategoryComponent } from './creations/music/music-category/music-category.component';
import { MusicDetailComponent } from './creations/music/music-detail/music-detail.component';
import { SoftwareCategoryComponent } from './creations/software/software-category/software-category.component';
import { SoftwareDetailComponent } from './creations/software/software-detail/software-detail.component';
import { BusinessDetailComponent } from './creations/business/business-detail/business-detail.component';
import { BusinessCategoryComponent } from './creations/business/business-category/business-category.component';
import { MeComponent } from './me/me.component';
import { ForClientsComponent } from './for-clients/for-clients.component';
import { ForRecruitersComponent } from './for-recruiters/for-recruiters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    HomeCreationsComponent,
    CreationsComponent,
    LoadingComponent,
    SpMeToggleComponent,
    MusicComponent,
    SoftwareComponent,
    BusinessComponent,
    CalligraphyComponent,
    TypedTitleComponent,
    BlogComponent,
    PostComponent,
    MdToHtmlPipe,
    CategoryComponent,
    MusicCategoryComponent,
    MusicDetailComponent,
    SoftwareCategoryComponent,
    SoftwareDetailComponent,
    BusinessDetailComponent,
    BusinessCategoryComponent,
    MeComponent,
    ForClientsComponent,
    ForRecruitersComponent,
  ],
  entryComponents: [
    LoadingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireFunctionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
