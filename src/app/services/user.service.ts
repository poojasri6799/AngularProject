import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import {HttpService} from '../services/http.service'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private snackBar: MatSnackBar, private route: Router, private httpService:HttpService) { }

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
  connectionUrl = environment.url;

  getFunction(){
    console.log("user service called");
    return this.httpService.get(`${this.connectionUrl}`);
  }

  userLogin(user:any){
    return this.httpService.post(`${this.connectionUrl}`, user);
    
  }
}
