import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/url/api/findAllEmployee');
  }
}
