import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';
import {UpdateEpisodeDialogComponent} from './UpdateEpisodeDialogComponent';
import {DiagnosisSelectModule} from '../../components/diagnosis-select/DiagnosisSelectModule';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DiagnosisSelectModule
  ],
  declarations: [
    UpdateEpisodeDialogComponent
  ],
  exports: [
    UpdateEpisodeDialogComponent
  ],
  entryComponents: [
    UpdateEpisodeDialogComponent
  ]
})
export class UpdateEpisodeDialogModule {

}
