import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseModel } from 'src/app/models/api-response-model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  public uploadFile(file: File): Observable<ApiResponseModel<string>> {
    let uploadData = new FormData();
    uploadData.append('myFile', file, file.name);
    
    return this.http.post<ApiResponseModel<string>>('my-backend.com/file-upload', uploadData /*, {reportProgress: true, observe: 'events' }*/);
  }

  public dummyFileUpload(file: File): Observable<ApiResponseModel<string>> {
    return this.http.get<ApiResponseModel<string>>('apis/fileUpload.json');
  }
}
