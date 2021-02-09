import { Component, OnInit,  HostListener } from '@angular/core';
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
 //template: 'I am a component!',
  styleUrls: ['./example.component.scss']
})


export class ExampleComponent implements OnInit {
  Firstname: string = "";   
  @HostListener('click', ['$event']) // ==> Method Decorator
  onHostClick(event: Event) {
     // call when click event triggered
  }
  constructor() { }

  ngOnInit(): void {
  }
  

}
