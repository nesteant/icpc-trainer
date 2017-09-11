import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdDatepickerModule,
  MdDialogModule,
  MdFormFieldModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {CreateVisitDialogComponent} from './CreateVisitDialogComponent';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';

@NgModule({
  imports: [
    CommonModule,
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
    CreateVisitDialogComponent
  ],
  exports: [
    CreateVisitDialogComponent
  ],
  entryComponents: [
    CreateVisitDialogComponent
  ]
})
export class CreateVisitDialogModule {

}
