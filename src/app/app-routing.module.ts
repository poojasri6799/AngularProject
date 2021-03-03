import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

import { MattoolbarComponent } from './component/mattoolbar/mattoolbar.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PracticeComponent } from './component/practice/practice.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { PatientComponent } from './component/patient/patient.component';
import { AdminComponent } from './component/admin/admin.component';
import {AuthguardGuard  } from "../app/AuthGuard/authguard.guard";

const routes: Routes = [
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dashboard', component:EmployeeInfoComponent
  },
  {
    path:'exp', component:PracticeComponent
  },
  {
    path:'doctor', component:HomePageComponent, canActivate: [AuthguardGuard]
  },
  {
    path:'appointment', component: AppointmentComponent
  },
  {
    path:'patient', component: PatientComponent
  },
  {
    path:'admin', component: AdminComponent,  canActivate: [AuthguardGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
