import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PatientsService} from '../../services/PatientsService';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'icpc-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public checkboxControl = new FormControl();

  constructor(private router: Router, private patientsService: PatientsService) {
  }

  public ngOnInit() {
    if (this.patientsService.getContext()) {
      this.router.navigate(['patients']);
    }
  }
}
