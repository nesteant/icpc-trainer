import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdDatepickerModule,
  MdDialogModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdRadioModule,
  MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {CloseEpisodeDialogComponent} from './CloseEpisodeDialogComponent';
import {SubVisitCardModule} from '../../components/subvisit-card/SubVisitCardModule';

@NgModule({
  imports: [
    CommonModule,
    MdRadioModule,
    MdMenuModule,
    MdIconModule,
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
    SubVisitCardModule
  ],
  declarations: [
    CloseEpisodeDialogComponent
  ],
  exports: [
    CloseEpisodeDialogComponent
  ],
  entryComponents: [
    CloseEpisodeDialogComponent
  ]
})
export class CloseEpisodeDialogModule {

}
