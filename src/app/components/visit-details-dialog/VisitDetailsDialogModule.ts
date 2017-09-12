import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdDatepickerModule,
  MdDialogModule, MdExpansionModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {VisitDetailsDialogComponent} from './VisitDetailsDialogComponent';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdExpansionModule,
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
    VisitDetailsDialogComponent
  ],
  exports: [
    VisitDetailsDialogComponent
  ],
  entryComponents: [
    VisitDetailsDialogComponent
  ]
})
export class VisitDetailsDialogModule {

}
