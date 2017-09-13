import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialogModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {CreateSubVisitDialogComponent} from './CreateSubVisitDialogComponent';
import {ActionSubVisitTabComponent} from './action/ActionSubVisitTabComponent';
import {DiagnosisSubVisitTabComponent} from './diagnosis/DiagnosisSubVisitTabComponent';
import {ReasonSubVisitTabComponent} from './reason/ReasonSubVisitTabComponent';
import {EpisodeSelectorModule} from './episode/EpisodeSelectorModule';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdCheckboxModule,
    MdButtonModule,
    MdDatepickerModule,
    MdDialogModule,
    MdFormFieldModule,
    MdInputModule,
    MdSelectModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    MdTabsModule,
    MdListModule,
    SharedModule,
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
