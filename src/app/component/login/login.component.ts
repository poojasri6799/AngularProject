import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private user: UserService, private route: Router) { }
  title = 'Login';
  @Input() email: string = "";
  pass: string = "";

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

  isLogin() {
    if (this.Email.valid && this.Password.valid) {
      this.user.userLogin("data").subscribe(
        (result: any) => {
          console.log(result);
        },
        (error:any) => {
          console.log(error);
        }
      );
    }
  }

  //   if (this.Email.valid && this.Password.valid) {
  //     // this.user.getSnackBarMsg("User Login");
  //     // this.route.navigate(['/dashboard'])
  //     if (this.Email.value == "quixy@gmail.com") {
  //       this.user.getSnackBarMsg("Admin Login");
  //       localStorage.setItem("Token", 'Admin')
  //       this.route.navigate(['/admin'])
  //     }else{
  //       this.route.navigate(['/doctor']);
  //       localStorage.setItem("Token", 'User')
  //       this.user.getSnackBarMsg("User Login");
  //     }
  //   }
  // }
}