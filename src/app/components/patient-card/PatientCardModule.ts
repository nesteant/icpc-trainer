import {NgModule} from '@angular/core';
import {PatientCardComponent} from './PatientCardComponent';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../SharedModule';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [PatientCardComponent],
  declarations: [PatientCardComponent]
})
export class PatientCardModule {

}
