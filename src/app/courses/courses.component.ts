import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  readonly newCourseForm = new FormGroup({
    courseName: new FormControl(""),
  });
  openNewCourseDialog: boolean = false;

  createCourse() {

  }
}
