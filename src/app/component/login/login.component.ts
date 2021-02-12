import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Login';
  @Input() email: any;
  @Input() password: any;
  hide = true;
  form: any;
  constructor(private formBuilder: FormBuilder, private route: Router, private snackbar: MatSnackBar, private user: UserService) { }
  snackbarMeaasge() {
    this.snackbar.open('logged In', 'successfully', {
      duration: 1500
    });
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  login(formValues: any) {
    let data = {
      email: formValues.email,
      password: formValues.password
    }
    if (this.form.valid) {
      console.log(data);
      this.user.login(data);
      this.route.navigate(['/doctor'])

    }
  }
}