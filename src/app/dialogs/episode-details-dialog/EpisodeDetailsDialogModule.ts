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
  MdListModule, MdMenuModule,
  MdSelectModule,
  MdTabsModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {EpisodeDetailsDialogComponent} from './EpisodeDetailsDialogComponent';
import {SubVisitCardModule} from '../../components/subvisit-card/SubVisitCardModule';

@NgModule({
  imports: [
    CommonModule,
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
    EpisodeDetailsDialogComponent
  ],
  exports: [
    EpisodeDetailsDialogComponent
  ],
  entryComponents: [
    EpisodeDetailsDialogComponent
  ]
})
export class EpisodeDetailsDialogModule {

}
