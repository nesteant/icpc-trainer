import {NgModule} from '@angular/core';
import {PatientsPageComponent} from './PatientsPageComponent';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PatientCardModule} from '../../components/patient-card/PatientCardModule';
import {MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PatientCardModule,
    RouterModule,
    MdCardModule
  ],
  exports: [PatientsPageComponent],
  declarations: [PatientsPageComponent]
})
export class PatientsModule {

}
