import { Component } from '@angular/core';
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  dropdownOpen = false;

  constructor(public userService: UserService, private router: Router) {
  }

  getFullName() {
    let user = this.userService.getUser();
    if (user && user.firstName && user.lastName)
      return user.firstName + ' ' + user.lastName;
    if (user && user.firstName)
      return user.firstName
    return "Профиль";
  }

  logout() {
    this.userService.deleteUser();
    this.router.navigate(['/']);
  }

}
