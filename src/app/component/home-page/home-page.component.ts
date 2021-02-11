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
      name :'Pooja', Exp: '10'
    },
    {
      name :'Radha', Exp: '11'
    },
    {
      name :'Pooja', Exp: '10'
    },
    {
      name :'Pooja', Exp: '10'
    },
    {
      name :'Pooja', Exp: '10'
    }
  ];
  
}
