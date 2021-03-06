import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../../models/api-response-model';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
import { ServiceHelper } from '../service-helper';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  public uploadFile(file: File): Observable<ApiResponseModel<string>> {
    let uploadData = new FormData();
    uploadData.append('file', file, file.name);

    let url: string = environment.host + "upload";
    
    return this.http.post<ApiResponseModel<string>>(url, uploadData, {headers: ServiceHelper.getOnlyAuthTokenHeader()} /*, {reportProgress: true, observe: 'events' }*/);
  }

  public dummyFileUpload(file: File): Observable<ApiResponseModel<string>> {
    return this.http.get<ApiResponseModel<string>>('apis/fileUpload.json');
  }
}
