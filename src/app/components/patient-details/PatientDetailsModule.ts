import {NgModule} from '@angular/core';
import {PatientDetailsComponent} from './PatientDetailsComponent';
import {CommonModule} from '@angular/common';
import {MdButtonModule, MdCardModule, MdIconModule, MdTabsModule} from '@angular/material';
import {SharedModule} from '../../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    SharedModule
  ],
  exports: [PatientDetailsComponent],
  declarations: [PatientDetailsComponent]
})
export class PatientDetailsModule {

}
