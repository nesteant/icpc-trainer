import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';
import {CreateSubVisitDialogComponent} from './CreateSubVisitDialogComponent';
import {ActionSubVisitTabComponent} from './action/ActionSubVisitTabComponent';
import {DiagnosisSubVisitTabComponent} from './diagnosis/DiagnosisSubVisitTabComponent';
import {ReasonSubVisitTabComponent} from './reason/ReasonSubVisitTabComponent';
import {EpisodeSelectorModule} from './episode/EpisodeSelectorModule';
import {CodeFormModule} from '../../components/code-form/CodeFormModule';
import {DiagnosisSelectModule} from '../../components/diagnosis-select/DiagnosisSelectModule';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CodeFormModule,
    DiagnosisSelectModule,
    EpisodeSelectorModule
  ],
  declarations: [
    ActionSubVisitTabComponent,
    DiagnosisSubVisitTabComponent,
    ReasonSubVisitTabComponent,
    CreateSubVisitDialogComponent
  ],
  exports: [
    CreateSubVisitDialogComponent
  ],
  entryComponents: [
    CreateSubVisitDialogComponent
  ]
})
export class CreateSubVisitDialogModule {

}
