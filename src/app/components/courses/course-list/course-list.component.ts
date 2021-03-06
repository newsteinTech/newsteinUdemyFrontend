import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../../models/courses/course-model';
import { CourseService } from '../../../services/course.service';
import { ToastService } from '../../../services/shared/toast.service';
import { HandledErrorResponse } from '../../../models/shared/handled-error-response';
import { ServiceHelper } from '../../../services/service-helper';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base-component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent extends BaseComponent implements OnInit {

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
