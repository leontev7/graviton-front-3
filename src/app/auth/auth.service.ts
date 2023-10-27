import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthRequest} from "./auth-request";
import {authUrl} from "../api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  auth(request: AuthRequest): Observable<any> {
    return this.http.post(authUrl, request);
  }
}
