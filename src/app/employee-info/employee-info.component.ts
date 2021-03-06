import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../app/services/user.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  constructor(private user:UserService) {}
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
  }

  ngOnInit(): void {
  }
  hide = true;

  Show = true;
  isPersonDetails() {
  if (this.Firstname.valid && this.Lastname.valid && this.Email.valid && this.Phoneno.valid && this.dob.valid) 
      this.Show = false;
   else
      console.log("success")
  }

  Watch = true;
  educationDeatils() {
    if (this.College.valid && this.University.valid)
      this.Watch = false;
    else 
      this.Watch = true;
  }

  details = true;
  familyDetails() {
    if (this.Fathername.valid && this.Mothername.valid && this.Address.valid && this.Pin.valid && this.State.valid)
      this.details = false;
    else 
      this.details = true;
  }

  fresher = true;
  isGet() {
    if (this.fresher == true)
      this.fresher = false;
    else
      this.fresher = true;
  }

  experience = true;
  isSet() {
    if (this.experience == true)
      this.experience = false
    else
      this.experience = true
  }

  submitDetails(){
    this.user.getSnackBarMsg("User Details Submitted");
  }

  Firstname = new FormControl("", [Validators.pattern('[a-zA-Z]{2,}'), Validators.required]);
  Lastname = new FormControl("", [Validators.pattern('[a-zA-Z]{2,}'), Validators.required]);
  Email = new FormControl("", [Validators.email, Validators.required]);
  Gender = new FormControl("", [Validators.minLength(6), Validators.required]);
  dob = new FormControl("", [Validators.minLength(10), Validators.required]);
  Phoneno = new FormControl("", [Validators.minLength(10), Validators.required]);

  private map = new Map<string, string[]>([
    ['B-Tech', ['CSC', 'EEE', 'Mechanical', 'Electrical']],
    ['MBA', ['Finance', 'Marketing', 'HR']],
    ['M-TECH', ['CAD', 'CAM', 'Electronics', 'Civil']],
    ['BBA', ['BBA1', 'BBA2', 'BBA3', 'BBA4']],
    ['PHD', ['Computer', 'Science', 'Maths', 'History']],
  ])
  HighestQulification: any;
  Stream: any;
  get HighestQulifications(): any {
    return Array.from(this.map.keys());
  }
  get Streams(): any | undefined {
    return this.map.get(this.HighestQulification);
  }

  Degree = new FormControl('', [Validators.minLength(3), Validators.required]);
  Branch = new FormControl('', [Validators.minLength(3), Validators.required]);
  College = new FormControl('', [Validators.minLength(3), Validators.required]);
  University = new FormControl('', [Validators.minLength(3), Validators.required]);
  CGPA = new FormControl('', [Validators.minLength(2), Validators.required]);
  YOP = new FormControl('', [Validators.minLength(2), Validators.required]);

  Fathername = new FormControl("", [Validators.pattern('[a-zA-Z]{2,}'), Validators.required]);
  Mothername = new FormControl("", [Validators.pattern('[a-zA-Z]{2,}'), Validators.required]);
  Address = new FormControl('');
  State = new FormControl('');
  Pin = new FormControl('');

  getFirstnameError() {
    return this.Firstname.hasError("required")
      ? 'Firstname is required'
      : 'please enter valid Firstname';
  }

  getLastnameError() {
    return this.Lastname.hasError("required")
      ? 'Lastname is required'
      : 'please enter valid lastname';
  }

  getEmailError() {
    return this.Email.hasError("required")
      ? 'email is required'
      : 'please enter valid emaill';
  }

  getPhonenoError() {
    return this.Phoneno.hasError("required")
      ? 'Phoneno is required'
      : 'please enter valid Phoneno';
  }
  getGenderError() {
    return this.Gender.hasError("required")
      ? 'Gender is required'
      : 'please enter valid Gender';
  }

  getDobError() {
    return this.dob.hasError("required")
      ? 'DOB is required'
      : 'please enter valid DOB';
  }


  getDegreeError() {
    return this.Degree.hasError("required")
      ? 'Degree is required'
      : 'please enter valid Degree';
  }

  getBranchError() {
    return this.Branch.hasError("required")
      ? 'Branch is required'
      : 'please enter valid Branch';
  }
  getCollegeError() {
    return this.College.hasError("required")
      ? 'College is required'
      : 'please enter valid College';
  }
  getUniError() {
    return this.University.hasError("required")
      ? 'University is required'
      : 'please enter valid University';
  }
  getAgreegatError() {
    return this.CGPA.hasError("required")
      ? 'Agreegate is required'
      : 'please enter valid Agreegate';
  }
  getYOPError() {
    return this.YOP.hasError("required")
      ? 'YOP is required'
      : 'please enter valid YOP';
  }

  getFathernameError() {
    return this.Fathername.hasError("required")
      ? 'Father name is required'
      : 'please enter valid fathername';
  }

  getMotherError() {
    return this.Mothername.hasError("required")
      ? 'Mother name is required'
      : 'please enter valid monther';
  }
  getAddressError() {
    return this.Address.hasError("required")
      ? 'Address is required'
      : 'please enter valid Address';
  }
  getStateError() {
    return this.State.hasError("required")
      ? 'State is required'
      : 'please enter valid State';
  }
  getPinError() {
    return this.Pin.hasError("required")
      ? 'Pin is required'
      : 'please enter valid Pin';
  }

}
