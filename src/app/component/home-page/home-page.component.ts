import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  doctor: any = [];
  constructor(private http : HttpClient) { }
  showDiscription: any = [];
  ngOnInit(): void {
    this.http.get("assets/Data/doctordata.json").subscribe(data =>{
      console.log(data);
      this.doctor = data;
   })
  }
}
