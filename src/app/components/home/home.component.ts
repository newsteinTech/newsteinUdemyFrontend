import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/courses/course-model';
import { CourseService } from 'src/app/services/course.service';
import { ToastService } from 'src/app/services/shared/toast.service';
import { Router } from '@angular/router';
import { HandledErrorResponse } from 'src/app/models/shared/handled-error-response';
import { ServiceHelper } from 'src/app/services/service-helper';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  public courses: CourseModel[];
  public loading: boolean;

  constructor(private courseService: CourseService, private toastService: ToastService, private router: Router) { 
    super(router, toastService);
  }

  ngOnInit() {
    this.loadCourses();
  }

  private loadCourses(): void {
    this.loading = true;

    this.courseService.getCourses().subscribe(
      response => {
        this.loading = false;
        if (response.isValid) {
          this.courses = response.data;
        } else {
          this.toastService.error(response.errors[0]);
        }
      },
      error => {
        this.loading = false;
          let handledError: HandledErrorResponse = ServiceHelper.handleErrorResponse({ ...error });
          this.checkUnauthorized(handledError);
      }
    )
  }
}
