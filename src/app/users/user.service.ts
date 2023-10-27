import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {authUrl} from "../api";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  setUser(user: User) {
    localStorage.setItem('graviton-user', JSON.stringify(user))
  }

  getUser(): User | null {
    const userString = localStorage.getItem('graviton-user');
    if (userString)
      return JSON.parse(userString) as User;
    return null;
  }

  deleteUser() {
    localStorage.removeItem('graviton-user');
  }


  constructor(private http: HttpClient) { }

}
