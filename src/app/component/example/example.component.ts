import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


// interface cities {
//   value: string;
  
// }

// interface state {
//   value: string;
  
// }




@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})


export class ExampleComponent implements OnInit {

  // private map = new Map<string, string[]>([
  //   ['Poland', ['Warszawa', 'Krakow']],
  //   ['USA', ['New York', 'Austin']],
  // ])

  // country:any;
  // city: any;

  // get countries(): string[] {
  //   return Array.from(this.map.keys());
  // }

  // get cities(): string[] | undefined {
  //   return this.map.get(this.country);
  // }
  

  
  // city: cities[] = [
  //   {value: 'steak-0'},
  //   {value: 'pizza-1'},
  //   {value: 'tacos-2'}
  // ];


  // states: state[] = [
  //   {value: 'steak-0'},
  //   {value: 'pizza-1'},
  //   {value: 'tacos-2'}
  // ];




  
  










  Show1 = true ;
  IsGet(){
    if(this.Show1 == true)
    this.Show1 = false;
    else
    this.Show1 = true;
  }

  Watch1 = true;
  IsSet(){
    if(this.Watch1 == true)
    this.Watch1 = false
    else 
    this.Watch1 = true
  }



  constructor() { }

  ngOnInit(): void {
  }
  

}
