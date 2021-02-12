import { Injectable } from '@angular/core';
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

  login(data:any) {
    data = {
     email: "pooja@gmail.com",
     password: "Pooja@123"
   }
   return data;
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
