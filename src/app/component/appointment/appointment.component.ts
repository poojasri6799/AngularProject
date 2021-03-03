import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(private http:HttpClient, private user:UserService) { }

  doctor: any = [];
  ngOnInit(): void {
  //   this.http.get("assets/Data/doctordetails.json").subscribe(data =>{
  //     console.log(data);
  //     this.doctor = data;
  //  })
  }

  onClick(){
      this.user.getFunction().subscribe(
        (result: any) => {
          console.log(result);
        },
        (error:any) => {
          console.log(error);
        }
      );
  }
}
  

