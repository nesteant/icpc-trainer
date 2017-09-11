import {NgModule} from '@angular/core';
import {PatientComponent} from './PatientComponent';
import {CommonModule} from '@angular/common';
import {MdCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, MdCardModule, RouterModule],
  exports: [PatientComponent],
  declarations: [PatientComponent]
})
export class PatientModule {

}
