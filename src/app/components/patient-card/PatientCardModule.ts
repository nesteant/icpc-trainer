import {NgModule} from '@angular/core';
import {PatientCardComponent} from './PatientCardComponent';
import {CommonModule} from '@angular/common';
import {MdCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, MdCardModule, RouterModule],
  exports: [PatientCardComponent],
  declarations: [PatientCardComponent]
})
export class PatientCardModule {

}
