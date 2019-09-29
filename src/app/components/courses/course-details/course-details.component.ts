import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../../models/courses/course-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../services/shared/toast.service';
import { CourseService } from '../../../services/course.service';
import { HandledErrorResponse } from '../../../models/shared/handled-error-response';
import { ServiceHelper } from '../../../services/service-helper';
import { ContentModel } from '../../../models/courses/contentModel';
import { BaseComponent } from '../../base-component';
import { FileUploadService } from '../../../services/shared/file-upload.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent extends BaseComponent implements OnInit {
  public model: CourseModel;

  public constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private toastService: ToastService, 
    private courseService: CourseService,
    private fileUploadService: FileUploadService) { 
      super(router, toastService);
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id == "-1") {
      this.model = new CourseModel();
    } else {
      this.loadCourse(id);
    }
  }
  
  public addNewContent(): void {
    if (this.model.contents == null) {
      this.model.contents = [];
    }

    this.model.contents.push(new ContentModel());
  }

  public removeContent(index: number): void {
    this.model.contents.splice(index, 1);
  }

  public onFileChanged(event, isVideo: boolean) {
    let file = event.target.files[0];
    this.uploadFile(file, isVideo);
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

  private uploadFile(file: File, isVideo: boolean): void {
    this.loading = true;
    this.fileUploadService.uploadFile(file).subscribe(
      response => {
        this.loading = false;
        if (response.isValid) {
          if (isVideo) {
            this.model.previewVideo = response.data;
          } else {
            this.model.image = response.data;
          }
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
