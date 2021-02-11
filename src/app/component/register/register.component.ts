import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
  }

  title = 'Registration Form';

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }
  hide = true;
  email : string = "";   
  pass : string = ""; 


  Firstname = new FormControl("", [Validators.pattern('[a-zA-Z]{2,}'), Validators.required]);
  Lastname = new FormControl("", [Validators.pattern('[a-zA-Z]{2,}'), Validators.required]);
  Email = new FormControl("", [Validators.email, Validators.required]);
  Gender = new FormControl("", [Validators.minLength(6), Validators.required]);
  dob = new FormControl("", [Validators.minLength(10), Validators.required]);
  Phoneno = new FormControl("", [Validators.minLength(10), Validators.required]);
  Password = new FormControl('', [Validators.minLength(8), Validators.required]);


  getFirstName() {
    return this.Firstname.hasError("required")
      ? 'Firstname is required'
      : 'please enter valid Firstname';
  }

  getLastName() {
    return this.Lastname.hasError("required")
      ? 'Lastname is required'
      : 'please enter valid Lastname';
  }

  getEmail() {
    return this.Email.hasError("required")
      ? 'email is required'
      : 'please enter valid emaill';
  }

  getPhoneno() {
    return this.Phoneno.hasError("required")
      ? 'PhoneNo is required'
      : 'please enter valid PhoneNo';
  }
  getGender() {
    return this.Gender.hasError("required")
      ? 'Gender is required'
      : 'please enter valid Gender';
  }

  getDob() {
    return this.dob.hasError("required")
      ? 'Dob is required'
      : 'please enter valid Dob';
  }

  getPassword() {
    return this.Password.hasError("required")
      ? 'Password is required'
      : 'please enter valid password';
  }

  isClick() {
    if (this.Firstname.valid&& this.Lastname.valid&&this.Email.valid && this.Password.valid && this.dob.valid&& this.Gender.valid&& this.Phoneno.valid) {
      this.user.getSnackBarMsg("User Registration");
    }
  }
}
