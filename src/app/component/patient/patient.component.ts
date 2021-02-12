import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private user: UserService) { }
  @Input() name: string = "";

  ngOnInit(): void {
  }

  isClick() {
    this.user.getSnackBarMsg("Appointment Confrim");
  }
}
