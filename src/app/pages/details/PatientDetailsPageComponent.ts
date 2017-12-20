import {Component, HostListener} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PatientsService} from '../../services/PatientsService';
import {Patient} from '../../model/Patient';

@Component({
  selector: 'icpc-patient-details-page',
  templateUrl: './patient-details-page.component.html'
})
export class PatientDetailsPageComponent {

  public patient: Observable<Patient>;

  constructor(activeRoute: ActivatedRoute, private patientsService: PatientsService) {
    this.patient = this.patientsService.selectedPatient;
    activeRoute.params.subscribe(() => this.patientsService.getPatient(activeRoute.snapshot.params.id));
  }

  @HostListener('window:resize', ['$event'])
  public resize(event: Event) {
    console.log(event);
  }
}
