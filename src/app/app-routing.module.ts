import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { ExampleComponent } from './component/example/example.component';

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
    path:'exp', component:ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
