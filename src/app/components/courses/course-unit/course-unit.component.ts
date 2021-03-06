import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from '../../../models/courses/course-model';

@Component({
  selector: 'app-course-unit',
  templateUrl: './course-unit.component.html',
  styleUrls: ['./course-unit.component.css']
})
export class CourseUnitComponent implements OnInit {

  @Input() public model: CourseModel;
  @Input() public isExternal: boolean;
  constructor() { }

  ngOnInit() {
  }

}
