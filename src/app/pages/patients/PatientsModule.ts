import {NgModule} from '@angular/core';
import {PatientsPageComponent} from './PatientsPageComponent';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PatientModule} from '../../components/patient/PatientModule';

@NgModule({
  imports: [
    CommonModule,
    PatientModule,
    RouterModule
  ],
  exports: [PatientsPageComponent],
  declarations: [PatientsPageComponent]
})
export class PatientsModule {

}
