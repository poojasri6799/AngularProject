import { Component, OnInit } from '@angular/core';
import * as data  from '../../../assets/Data/doctordata.json';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 doctors : any = (data as any ).default;
  constructor() { }

  ngOnInit(): void {
    console.log(data);
  }

}
