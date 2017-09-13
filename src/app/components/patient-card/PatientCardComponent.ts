import {Component, Input} from '@angular/core';

@Component({
  selector: 'icpc-patient',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent {

  @Input()
  public patient: any;
}
