import {NgModule} from '@angular/core';
import {SharedModule} from '../../SharedModule';
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdTabsModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {EpisodeCardComponent} from './EpisodeCardComponent';
import {SubVisitCardModule} from '../visit-card/SubVisitCardModule';

@NgModule({
  imports: [
    CommonModule,
    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    SharedModule,
    SubVisitCardModule
  ],
  exports: [
    EpisodeCardComponent
  ],
  declarations: [
    EpisodeCardComponent
  ]
})
export class EpisodeCardModule {

}
