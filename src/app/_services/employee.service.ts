import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employeeInfo } from '../models/employeeInfo';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
const API_URL = 'http://localhost:51705/api/employee';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
  constructor(private httpClient: HttpClient) { }
  
  getEmployeeList(){
    return this.httpClient.get<employeeInfo[]>(API_URL);
  }
  getEmployeeById(id:number): Observable<employeeInfo>
  {
    return this.httpClient.get<employeeInfo>(`${API_URL}/${id}`);
  }
  createEmployee(employeeInfo:employeeInfo)
  {
    return this.httpClient.post<employeeInfo>(API_URL, employeeInfo);
  }

  
  updateEmployee(id:number,employeeInfo:employeeInfo): Observable<employeeInfo> {
    return this.httpClient.put<employeeInfo>(`${API_URL}/${id}`, employeeInfo);
   
  }

  deleteEmployee(id:number):Observable<number>
  {
    return this.httpClient.delete<number>(`${API_URL}/${id}`);
  }
 
}