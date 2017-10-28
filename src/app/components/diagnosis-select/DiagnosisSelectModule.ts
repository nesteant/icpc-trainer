import {NgModule} from '@angular/core';
import {DiagnosisSelectComponent} from './DiagnosisSelectComponent';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [DiagnosisSelectComponent],
  declarations: [DiagnosisSelectComponent]
})
export class DiagnosisSelectModule {

}
