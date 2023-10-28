import {Component, OnInit} from '@angular/core';
import {StudentService} from "../student.service";
import {UserService} from "../../users/user.service";
import {Student} from "../student";
import {StudentLevel} from "../student-level";

@Component({
  selector: 'student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  student: Student | undefined;

  readonly value = [40, 30, 20, 10];

  // Levels
  openLevels: boolean = false;
  levels: StudentLevel[] = [];

  constructor(private studentService: StudentService, private userService: UserService) {
  }

  ngOnInit(): void {

    let telegramId = this.userService.getUser()?.telegramId;

    if (!telegramId)
      return;

    this.studentService.getStudent(telegramId).subscribe(student => {
      this.student = student;
    }, error => {
      console.error('student load error:', error);
    });

    this.studentService.getStudentLevels().subscribe(levels => {
      this.levels = levels;
    }, error => {
      console.error('student levels load error:', error);
    });
  }

}
