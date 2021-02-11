import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hello:any = [
    {
      name :'Saritha',Specialized : 'Cardiologist' ,Exp: '10', image : '../../../assets/Images/doc6.jfif'
    },
    {
      name :'Radha', Specialized : 'Gynaecologist' , Exp: '8',  image :'../../../assets/Images/female1.jfif'
    },
    {
      name :'Amit',  Specialized : 'Dentist' , Exp: '13', image : '../../../assets/Images/maledoc.jfif'
    }, 
    {
      name :'Chandini',  Specialized : 'ENT specialist' , Exp: '7', image : '../../../assets/Images/doctor.jfif'
    },
    {
      
      name :'Jhons', Specialized : 'Dermatologist' , Exp: '12', image : '../../../assets/Images/male2.jfif'
    }
  ];
  
}
