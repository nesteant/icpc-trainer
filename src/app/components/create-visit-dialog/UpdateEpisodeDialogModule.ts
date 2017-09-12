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
  MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {UpdateEpisodeDialogComponent} from './UpdateEpisodeDialogComponent';

@NgModule({
  imports: [
    CommonModule,
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
    SharedModule
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
