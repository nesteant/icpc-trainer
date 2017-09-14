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
import {ChangeEpisodeDialogComponent} from './ChangeEpisodeDialogComponent';
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
    ChangeEpisodeDialogComponent
  ],
  exports: [
    ChangeEpisodeDialogComponent
  ],
  entryComponents: [
    ChangeEpisodeDialogComponent
  ]
})
export class ChangeEpisodeDialogModule {

}
