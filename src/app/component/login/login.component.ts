import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }
 
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar() {
    this.snackBar.open('Logged In', 'succesfully', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  title = 'Login';
  @Input() email : string = ""; 
  pass : string = "";   

  ngOnInit(): void {
  }
  hide = true

  Email = new FormControl("", [Validators.email, Validators.required]);

  Password = new FormControl('', [Validators.minLength(8), Validators.required]);

  getEmail() {
    return this.Email.hasError("required")
      ? 'email is required'
      : 'please enter valid emaill';
  }

  getPassword() {
    return this.Password.hasError("required")
      ? 'Password is required'
      : 'please enter valid password';
  }
}
