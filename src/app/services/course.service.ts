import { Injectable } from '@angular/core';
import { CourseModel } from '../models/courses/course-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api-response-model';
import { environment } from 'src/environments/environment';
import { ServiceHelper } from './service-helper';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private httpClient: HttpClient) { 
  }

  public getCourses(): Observable<ApiResponseModel<CourseModel[]>> {
    let url: string = environment.host + "courses";
    return this.httpClient.get<ApiResponseModel<CourseModel[]>>(url, {headers: ServiceHelper.getAuthHeader()});
    //return this.httpClient.get<ApiResponseModel<CourseModel[]>>('apis/courseAPI/courseListResponse.json');
  }

  public getCourseById(_id: string): Observable<ApiResponseModel<CourseModel>> {

    let url: string = environment.host + "courses/" + _id;
    return this.httpClient.get<ApiResponseModel<CourseModel>>(url, {headers: ServiceHelper.getAuthHeader()});
    //return this.httpClient.get<ApiResponseModel<CourseModel>>('apis/courseAPI/courseDetailResponse.json');
  }
}
