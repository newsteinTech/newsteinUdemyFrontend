import { Injectable } from '@angular/core';
import { CourseModel } from '../models/courses/course-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/api-response-model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: CourseModel[];
  constructor(private httpClient: HttpClient) { 
  }

  public getCourses(): Observable<ApiResponseModel<CourseModel[]>> {
    return this.httpClient.get<ApiResponseModel<CourseModel[]>>('apis/courseAPI/courseListResponse.json');
  }

  public getCourseById(_id: string): Observable<ApiResponseModel<CourseModel>> {
    return this.httpClient.get<ApiResponseModel<CourseModel>>('apis/courseAPI/courseDetailResponse.json');
  }
}
