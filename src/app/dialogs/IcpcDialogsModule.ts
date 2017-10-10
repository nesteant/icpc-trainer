import {NgModule} from '@angular/core';
import {UpdateEpisodeDialogModule} from './update-episode-dialog/UpdateEpisodeDialogModule';
import {EpisodeDetailsDialogModule} from './episode-details-dialog/EpisodeDetailsDialogModule';
import {VisitDetailsDialogModule} from './visit-details-dialog/VisitDetailsDialogModule';
import {CreateSubVisitDialogModule} from './create-subvisit-dialog/CreateSubVisitDialogModule';
import {ChangeEpisodeDialogModule} from './change-episode-dialog/ChangeEpisodeDialogModule';
import {CloseEpisodeDialogModule} from './close-episode-dialog/CloseEpisodeDialogModule';

@NgModule({
  imports: [
    VisitDetailsDialogModule,
    EpisodeDetailsDialogModule,
    UpdateEpisodeDialogModule,
    CreateSubVisitDialogModule,
    ChangeEpisodeDialogModule,
    CloseEpisodeDialogModule
  ],
  exports: [
    VisitDetailsDialogModule,
    EpisodeDetailsDialogModule,
    UpdateEpisodeDialogModule,
    CreateSubVisitDialogModule,
    ChangeEpisodeDialogModule,
    CloseEpisodeDialogModule
  ],
  declarations: []
})
export class IcpcDialogsModule {

}
