import {NgModule} from '@angular/core';
import {SharedModule} from '../../SharedModule';
import {CommonModule} from '@angular/common';
import {EpisodeCardComponent} from './EpisodeCardComponent';
import {SubVisitCardModule} from '../subvisit-card/SubVisitCardModule';

@NgModule({
  imports: [
    CommonModule,
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
