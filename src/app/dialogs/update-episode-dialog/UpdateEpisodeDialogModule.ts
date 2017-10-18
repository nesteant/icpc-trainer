import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';
import {UpdateEpisodeDialogComponent} from './UpdateEpisodeDialogComponent';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UpdateEpisodeDialogComponent
  ],
  exports: [
    UpdateEpisodeDialogComponent
  ],
  entryComponents: [
    UpdateEpisodeDialogComponent
  ]
})
export class UpdateEpisodeDialogModule {

}
