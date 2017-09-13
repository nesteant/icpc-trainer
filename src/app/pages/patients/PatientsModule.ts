import {NgModule} from '@angular/core';
import {PatientsPageComponent} from './PatientsPageComponent';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PatientCardModule} from '../../components/patient-card/PatientCardModule';

@NgModule({
  imports: [
    CommonModule,
    PatientCardModule,
    RouterModule
  ],
  exports: [PatientsPageComponent],
  declarations: [PatientsPageComponent]
})
export class PatientsModule {

}
