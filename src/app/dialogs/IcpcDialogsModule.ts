import {NgModule} from '@angular/core';
import {UpdateEpisodeDialogModule} from './update-episode-dialog/UpdateEpisodeDialogModule';
import {EpisodeDetailsDialogModule} from './episode-details-dialog/EpisodeDetailsDialogModule';
import {VisitDetailsDialogModule} from './visit-details-dialog/VisitDetailsDialogModule';
import {CreateSubVisitDialogModule} from './create-subvisit-dialog/CreateSubVisitDialogModule';

@NgModule({
  imports: [
    VisitDetailsDialogModule,
    EpisodeDetailsDialogModule,
    UpdateEpisodeDialogModule,
    CreateSubVisitDialogModule
  ],
  exports: [
    VisitDetailsDialogModule,
    EpisodeDetailsDialogModule,
    UpdateEpisodeDialogModule,
    CreateSubVisitDialogModule
  ],
  declarations: []
})
export class IcpcDialogsModule {

}
