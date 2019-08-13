import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CourseUnitComponent } from './components/courses/course-unit/course-unit.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { ContentDetailComponent } from './components/courses/contents/content-detail/content-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CourseDetailsExternalComponent } from './components/courses/course-details-external/course-details-external.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CourseDetailsComponent,
    CourseUnitComponent,
    CourseListComponent,
    ContentDetailComponent,
    HomeComponent,
    CourseDetailsExternalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
