import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './_helpers/auth.guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: EmployeeComponent,canActivate: [AuthGuard] },
  { path: 'update/:id', component: EmployeeComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

