import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdDatepickerModule,
  MdDialogModule,
  MdFormFieldModule, MdIconModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {CreateEpisodeDialogComponent} from './CreateEpisodeDialogComponent';

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
    CreateEpisodeDialogComponent
  ],
  exports: [
    CreateEpisodeDialogComponent
  ],
  entryComponents: [
    CreateEpisodeDialogComponent
  ]
})
export class CreateEpisodeDialogModule {

}
