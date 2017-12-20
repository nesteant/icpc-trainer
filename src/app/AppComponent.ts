import {Component, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';
import {PatientsService} from './services/PatientsService';
import {IcpcService} from "./services/IcpcService";

@Component({
  selector: 'icpc-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  //TODO:nesteant: added to sync. Should be revised and iomplemented normally ngrx
  constructor(private patientService: PatientsService, private icpcService: IcpcService) {
  }

  public ngOnInit() {
  }

  public logout() {
    this.patientService.clearContext();
    window.location.href = '/';
  }

  public get loggedIn() {
    return !!this.patientService.getContext();
  }
}
