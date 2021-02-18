import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatSnackBar,
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

  verticalPosition: MatSnackBarVerticalPosition = 'top';

  getSnackBarMsg(message: any) {
    this.snackBar.open(message, 'successfully', {
      duration: 1500,
      verticalPosition: this.verticalPosition,
    });
  }
}
