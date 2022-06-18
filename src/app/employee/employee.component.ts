import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { employeeInfo } from '../models/employeeInfo';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  form: any = {
    id:0,
    employeeId:0,
    name:null,
    gender:null,
    jobDescription:null,
    salary:0
  };
  id: number = 0;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: EmployeeService, private tokenStorage: TokenStorageService,private route: ActivatedRoute,
    private router: Router,) { }

  // ngOnInit(): void {
  //   if (this.tokenStorage.getToken()) {
  //     this.isLoggedIn = true;
  //     this.roles = this.tokenStorage.getUser().roles;
  //   }
  // }

  ngOnInit(): void {
    //**************Get User ID On Edit********************* */
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        
        const data = this.authService.getEmployeeById(this.id).subscribe((data: employeeInfo)=>{
          this.form = data;
        }); 
       
      }
    });
  }

  onSubmit(): void {
  

if(this.id==0)
{
    this.authService.createEmployee(this.form).subscribe(
      data => {
        
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    }
    else
    {
      this.authService.updateEmployee(this.form.employeeId,this.form).subscribe(
        data => {
          
          this.reloadPage();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
      
    }
  }
  



  reloadPage(): void {
    window.location.reload();
  }
}
