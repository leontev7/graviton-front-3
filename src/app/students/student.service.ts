import { Injectable } from '@angular/core';
import {AuthRequest} from "../auth/auth-request";
import {Observable} from "rxjs";
import {authUrl, getStudent, getStudentLevels} from "../api";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Student} from "./student";
import {StudentLevel} from "./student-level";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudent(telegramId: string): Observable<Student> {
    let params = new HttpParams().set('telegramId', telegramId);
    let headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
    return this.http.get<Student>(getStudent, { params: params, headers: headers });
  }

  getStudentLevels(): Observable<StudentLevel[]> {
    let headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
    return this.http.get<StudentLevel[]>(getStudentLevels, { headers: headers });
  }
}
