import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private snackBar: MatSnackBar, private route: Router) { }
  
  navigate() {
    console.log("Form valid, route to dashboard")
    this.route.navigate(['/dashboard'])
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  getSnackBarMsg(message: any) {
    this.snackBar.open(message, 'success', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
