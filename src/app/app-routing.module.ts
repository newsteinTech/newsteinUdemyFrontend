import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/user/signup/signup.component';
import { LoginComponent } from './components/user/login/login.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { HomeComponent } from './components/home/home.component';
import { CourseDetailsExternalComponent } from './components/courses/course-details-external/course-details-external.component';
import { TeacherGuard } from './guard/teacher.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'courses', pathMatch: 'full'},

  { path: 'courses', canActivate: [AuthGuard], children: [
      { path: ':id', component: CourseDetailsExternalComponent},
      { path: '', component: HomeComponent}
    ]
  },

  {
    path: 'teacher', canActivate: [TeacherGuard], children: [
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
