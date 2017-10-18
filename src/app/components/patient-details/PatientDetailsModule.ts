import {NgModule} from '@angular/core';
import {PatientDetailsComponent} from './PatientDetailsComponent';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';
import {EpisodeCardModule} from '../episode-card/EpisodeCardModule';
import {VisitCardModule} from '../visit-card/VisitCardModule';

@NgModule({
  imports: [
    CommonModule,
    EpisodeCardModule,
    VisitCardModule,
    SharedModule
  ],
  exports: [
    PatientDetailsComponent
  ],
  declarations: [
    PatientDetailsComponent
  ]
})
export class PatientDetailsModule {

}
