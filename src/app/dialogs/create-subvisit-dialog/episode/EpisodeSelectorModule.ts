import {NgModule} from '@angular/core';
import {EpisodeSelectorComponent} from './EpisodeSelectorComponent';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCheckboxModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdCheckboxModule,
    MdButtonModule,
    MdFormFieldModule,
    MdInputModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [EpisodeSelectorComponent],
  declarations: [EpisodeSelectorComponent]
})
export class EpisodeSelectorModule {

}
