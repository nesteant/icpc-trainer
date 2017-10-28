import {NgModule} from '@angular/core';
import {EpisodeSelectorComponent} from './EpisodeSelectorComponent';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../SharedModule';
import {DiagnosisSelectModule} from '../../../components/diagnosis-select/DiagnosisSelectModule';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DiagnosisSelectModule,
  ],
  exports: [EpisodeSelectorComponent],
  declarations: [EpisodeSelectorComponent]
})
export class EpisodeSelectorModule {

}
