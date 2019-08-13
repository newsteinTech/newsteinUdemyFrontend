import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/user/signup/signup.component';
import { LoginComponent } from './components/user/login/login.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { HomeComponent } from './components/home/home.component';
import { CourseDetailsExternalComponent } from './components/courses/course-details-external/course-details-external.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: '', component: HomeComponent},
  { path: 'courses/:id', component: CourseDetailsExternalComponent},

  {
    path: 'teacher', children: [
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/:id', component: CourseDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
