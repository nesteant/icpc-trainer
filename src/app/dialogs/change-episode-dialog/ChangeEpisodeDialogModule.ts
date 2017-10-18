import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../SharedModule';
import {ChangeEpisodeDialogComponent} from './ChangeEpisodeDialogComponent';
import {SubVisitCardModule} from '../../components/subvisit-card/SubVisitCardModule';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SubVisitCardModule
  ],
  declarations: [
    ChangeEpisodeDialogComponent
  ],
  exports: [
    ChangeEpisodeDialogComponent
  ],
  entryComponents: [
    ChangeEpisodeDialogComponent
  ]
})
export class ChangeEpisodeDialogModule {

}
