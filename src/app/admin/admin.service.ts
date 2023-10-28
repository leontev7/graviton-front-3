import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {getStudents} from "../api";
import {Student} from "../students/student";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getStudents(): Observable<Student[]> {
    let headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
    return this.http.get<Student[]>(getStudents, { headers: headers });
  }


  constructor(private http: HttpClient) { }

}
