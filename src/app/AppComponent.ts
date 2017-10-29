import {Component, OnInit} from '@angular/core';
import {PatientsService} from './services/PatientsService';

@Component({
  selector: 'icpc-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private patientService: PatientsService) {
  }

  public ngOnInit() {
  }

  public logout() {
    this.patientService.clearContext();
    window.location.href = '/';
  }
}
