import {Component, Input} from '@angular/core';

@Component({
  selector: 'icpc-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  @Input()
  public patient: any;
}
