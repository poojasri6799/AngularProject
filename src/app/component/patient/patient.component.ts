import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {


  constructor(private user: UserService) {

  }
  @Input() name: string = "";

  ngOnInit(): void {
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    return '';
  }

  isClick() {
    this.user.getSnackBarMsg("Appointment Confrim");
  }
}
