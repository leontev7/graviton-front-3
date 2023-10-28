import {Component, OnInit} from '@angular/core';
import {Student} from "../../students/student";
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  students: Student[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {

    this.adminService.getStudents().subscribe(students =>
      {
        this.students = students;
      }, error => {
        console.log("students load error")
      }
    )
  }


}
