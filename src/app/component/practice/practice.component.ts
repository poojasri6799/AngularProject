import { Component, OnInit, Input, OnChanges, ChangeDetectorRef, DoCheck } from '@angular/core';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})

export class PracticeComponent implements DoCheck, OnInit, OnChanges {

  title = 'Quixy';

  public obj: any = {
    changer: 1
  };

  private _oldValue: number = 1;

  constructor(private _changeRef: ChangeDetectorRef) { alert("1. on changes called"); }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.obj.changer += 1;
    }, 1000);


  }

  ngDoCheck(): void {
    if (this._oldValue !== this.obj.changer) {
      this._oldValue = this.obj.changer;

      //disable this line to see the counter not moving
      this._changeRef.detectChanges();
    }
  }

  doctor: any = [
    {
      name: 'Saritha', Specialized: 'Cardiologist', Exp: '10', image: '../../../assets/Images/doc6.jfif'
    },
    {
      name: 'Radha', Specialized: 'Gynaecologist', Exp: '8', image: '../../../assets/Images/female1.jfif'
    },
    {
      name: 'Amit', Specialized: 'Dentist', Exp: '13', image: '../../../assets/Images/maledoc.jfif'
    },
    {
      name: 'Chandini', Specialized: 'ENT specialist', Exp: '7', image: '../../../assets/Images/doctor.jfif'
    },
    {
      name: 'Jhons', Specialized: 'Dermatologist', Exp: '12', image: '../../../assets/Images/male2.jfif'
    }
  ];



















  //  hello:any = [
  //   {
  //     name :'Pooja', Exp: '10'
  //   },
  //   {
  //     name :'Radha', Exp: '11'
  //   },
  //   {
  //     name :'Pooja', Exp: '10'
  //   },
  //   {
  //     name :'Pooja', Exp: '10'
  //   },
  //   {
  //     name :'Pooja', Exp: '10'
  //   }
  // ];

}
