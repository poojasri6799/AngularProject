import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})



export class PracticeComponent implements OnInit {
 

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
