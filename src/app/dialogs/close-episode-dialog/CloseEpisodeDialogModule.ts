import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {CloseEpisodeDialogComponent} from './CloseEpisodeDialogComponent';
import {SubVisitCardModule} from '../../components/subvisit-card/SubVisitCardModule';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SubVisitCardModule
  ],
  declarations: [
    CloseEpisodeDialogComponent
  ],
  exports: [
    CloseEpisodeDialogComponent
  ],
  entryComponents: [
    CloseEpisodeDialogComponent
  ]
})
export class CloseEpisodeDialogModule {

}
