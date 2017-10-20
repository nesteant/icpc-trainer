import {NgModule} from '@angular/core';
import {EpisodeSelectorComponent} from './EpisodeSelectorComponent';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../SharedModule';

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
