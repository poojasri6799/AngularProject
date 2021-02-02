import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar:MatSnackBar) { }

  SnackBar(){
    
    this.snackbar.open('logged In','succesfully',{
      duration:3000
      });
  }

  ngOnInit(): void {
  }
hide = true

Email = new FormControl("",[Validators.email, Validators.required]);

Password = new FormControl('',[Validators.minLength(8),Validators.required]);

getEmailError(){
   return this.Email.hasError("required")
   ?'email is required'
   : 'please enter valid emaill';
}

getpasswordError(){
  return this.Password.hasError("required")
  ?'Password is required'
  : 'please enter valid password';
}
}
