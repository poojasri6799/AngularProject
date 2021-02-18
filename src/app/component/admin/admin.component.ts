import { Component, OnInit } from '@angular/core';
import * as data  from '../../../assets/Data/doctordata.json';

export interface PeriodicElement {
  No: number;
  Name: string;
  Specialized: string;
  Experience: string;
  Image: string;
}


const ELEMENT_DATA: PeriodicElement[] = [

  {No:1,Name:'Saritha',Specialized:'Cardiologist',Experience:'10',Image:'../../../assets/Images/doc6.jfif'},
  {No:2,Name:'Radha',Specialized:'Gynaecologist',Experience:'8',Image:'../../../assets/Images/female1.jfif'},
  {No:3,Name:'Amit',Specialized:'Dentist',Experience:'13',Image:'../../../assets/Images/maledoc.jfif'},
  {No:4,Name:'Chandini',Specialized:'ENT specialist',Experience:'7',Image:'../../../assets/Images/doctor.jfif'},
  {No:5,Name:'Jhons',Specialized:'Dermatologist',Experience:'12',Image:'../../../assets/Images/male2.jfif'}
  
];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
 
})

export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['No','Name', 'Specialized', 'Experience', 'Image'];
  dataSource = ELEMENT_DATA;
  
  constructor() { } 

  ngOnInit(): void {
  }

}

