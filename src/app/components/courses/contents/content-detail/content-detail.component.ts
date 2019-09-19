import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContentModel } from '../../../../models/courses/contentModel';
import { HandledErrorResponse } from '../../../../models/shared/handled-error-response';
import { BaseComponent } from '../../../../components/base-component';
import { ServiceHelper } from '../../../../services/service-helper';
import { FileUploadService } from '../../../../services/shared/file-upload.service';
import { ToastService } from '../../../../services/shared/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent extends BaseComponent implements OnInit {
  @Output() contentRemoveEvent = new EventEmitter<number>();

  @Input() public model: ContentModel;
  @Input() public index: number;
  @Input() public showAddContent: boolean;

  public hasVideo: boolean;

  public constructor(private fileUploadService: FileUploadService, private toastService: ToastService, private router: Router) {
    super(router, toastService);
   }

  ngOnInit() {
  }

  public addNewSubContent() : void {
    if (this.model.subContents == null) {
      this.model.subContents = [];
    }

    this.model.subContents.push(new ContentModel());
  }

  public removeContent(index: number): void {
    this.model.subContents.splice(index, 1);
  }

  public callParent(index: number) {
    this.contentRemoveEvent.next(index);
  }

  public onFileChanged(event) {
    let file = event.target.files[0];
    this.uploadFile(file);
  }

  private uploadFile(file: File): void {
    this.loading = true;

    this.fileUploadService.dummyFileUpload(file).subscribe(
      response => {
        this.loading = false;
        if (response.isValid) {
          this.model.video = response.data;
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
