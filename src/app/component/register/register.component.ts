import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import {FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  dateClass:MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view==='month') {
    const date=cellDate.getDate();
    return (date===1||date===20) ?'example-custom-date-class':'';
     }
    return'';
     }

  constructor() { }

  ngOnInit(): void {
  }
  hide = true;

  Firstname = new FormControl("",[Validators.pattern('[a-zA-Z]{2,}'), Validators.required]);
  Lastname = new FormControl("",[Validators.pattern('[a-zA-Z]{2,}'), Validators.required]);
  Email = new FormControl("",[Validators.email, Validators.required]);
  Gender = new FormControl("",[Validators.minLength(6), Validators.required]);
  dob = new FormControl("",[Validators.minLength(10), Validators.required]);
  Phoneno = new FormControl("",[Validators.minLength(10), Validators.required]);

  Password = new FormControl('',[Validators.minLength(8),Validators.required]);


  getFirstnameError(){
    return this.Email.hasError("required")
    ?'email is required'
    : 'please enter valid emaill';
 }

 getLastnameError(){
  return this.Email.hasError("required")
  ?'email is required'
  : 'please enter valid emaill';
}

getEmailError(){
   return this.Email.hasError("required")
   ?'email is required'
   : 'please enter valid emaill';
}

getPhonenoError(){
  return this.Email.hasError("required")
  ?'email is required'
  : 'please enter valid emaill';
}
getGenderError(){
  return this.Email.hasError("required")
  ?'email is required'
  : 'please enter valid emaill';
}

getDobError(){
  return this.Email.hasError("required")
  ?'email is required'
  : 'please enter valid emaill';
}

getPasswordError(){
  return this.Password.hasError("required")
  ?'Password is required'
  : 'please enter valid password';
}


}
