import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {EpisodeDetailsDialogComponent} from './EpisodeDetailsDialogComponent';
import {SubVisitCardModule} from '../../components/subvisit-card/SubVisitCardModule';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
