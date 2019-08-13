import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base-component';
import { CourseModel } from 'src/app/models/courses/course-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/shared/toast.service';
import { CourseService } from 'src/app/services/course.service';
import { HandledErrorResponse } from 'src/app/models/shared/handled-error-response';
import { ServiceHelper } from 'src/app/services/service-helper';
import { ContentModel } from 'src/app/models/courses/contentModel';

@Component({
  selector: 'app-course-details-external',
  templateUrl: './course-details-external.component.html',
  styleUrls: ['./course-details-external.component.css']
})
export class CourseDetailsExternalComponent extends BaseComponent implements OnInit {
  public model: CourseModel;
  public currentContent: ContentModel;

  public constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private toastService: ToastService, 
    private courseService: CourseService) { 
      super(router, toastService);
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.loadCourse(id);
  }

  public changeVideo(content: ContentModel): void {
    this.currentContent = content;
  }

  private loadCourse(id: string): void {
    this.loading = true;

    this.courseService.getCourseById(id).subscribe(
      response => {
        this.loading = false;
        if (response.isValid) {
          this.model = response.data;
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

