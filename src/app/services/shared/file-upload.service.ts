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
    uploadData.append('file', file, file.name);
    let url: string = "http://localhost:8000/upload"
    
    return this.http.post<ApiResponseModel<string>>(url, uploadData /*, {reportProgress: true, observe: 'events' }*/);
  }

  public dummyFileUpload(file: File): Observable<ApiResponseModel<string>> {
    return this.http.get<ApiResponseModel<string>>('apis/fileUpload.json');
  }
}
