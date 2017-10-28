import {Component, OnInit} from '@angular/core';
import {IcpcService} from './services/IcpcService';
import {PatientsService} from './services/PatientsService';

@Component({
  selector: 'icpc-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private patientService: PatientsService, private icpcService: IcpcService) {
  }

  public ngOnInit() {
    this.icpcService.loadItems();
  }

  public logout() {
    this.patientService.clearContext();
    window.location.href = '/';
  }
}
