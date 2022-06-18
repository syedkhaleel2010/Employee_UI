import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeInfo } from '../models/employeeInfo';
import {EmployeeService} from "../_services/employee.service";
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  emp: Array<employeeInfo> =[];

  constructor(private service:EmployeeService,private tokenStorage: TokenStorageService) {}
  
  ngOnInit() {
    this.getEmployeeList();
  }
  deleteEmployee(id:number)
  {
    this.service.deleteEmployee(id)
    .subscribe(book=>{
      this.getEmployeeList();
    })
  }
  getEmployeeList()
  {
    this.service.getEmployeeList()
        .subscribe((response) => {
       this.emp = response;
        });
  }
  
}