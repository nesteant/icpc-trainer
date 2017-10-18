import {NgModule} from '@angular/core';
import {EpisodeSelectorComponent} from './EpisodeSelectorComponent';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../SharedModule';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [EpisodeSelectorComponent],
  declarations: [EpisodeSelectorComponent]
})
export class EpisodeSelectorModule {

}
