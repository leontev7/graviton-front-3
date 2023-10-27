import { Component } from '@angular/core';
import {UserService} from "../../users/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  readonly personalDataForm = new FormGroup({
    firstName: new FormControl(this.userService.getUser()?.firstName),
    lastName: new FormControl(this.userService.getUser()?.lastName),
  });
  openInfo: boolean = false;
  constructor(private userService: UserService) {
  }

  getFullName() {
    let user = this.userService.getUser();
    if (user && user.firstName && user.lastName)
      return user.firstName + ' ' + user.lastName;
    return "Профиль";
  }

  isStudent() {return this.userService.getUser()?.role === 'ROLE_STUDENT';}

  isTutor() {return this.userService.getUser()?.role === 'ROLE_TUTOR';}
}
