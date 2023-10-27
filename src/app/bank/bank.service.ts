import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {authUrl, getStudent, getStudentLevels, increaseBalance} from "../api";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IncreaseBalanceRequest} from "./increase-balance-request";
import {Invoice} from "./invoice";

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  increaseBalance(request: IncreaseBalanceRequest): Observable<Invoice> {
    return this.http.post<Invoice>(increaseBalance, request);
  }

}
