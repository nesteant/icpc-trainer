import {NgModule} from '@angular/core';
import {UpdateEpisodeDialogModule} from './update-episode-dialog/UpdateEpisodeDialogModule';
import {EpisodeDetailsDialogModule} from './episode-details-dialog/EpisodeDetailsDialogModule';
import {VisitDetailsDialogModule} from './visit-details-dialog/VisitDetailsDialogModule';
import {CreateSubVisitDialogModule} from './create-subvisit-dialog/CreateSubVisitDialogModule';
import {ChangeEpisodeDialogModule} from './change-episode-dialog/ChangeEpisodeDialogModule';
import {CloseEpisodeDialogModule} from './close-episode-dialog/CloseEpisodeDialogModule';
import {CodeFormModule} from '../components/code-form/CodeFormModule';
import {PromptDialogModule} from './prompt-dialog/PromptDialogModule';
import {AddPatientDialogModule} from "./add-patient-dialog/AddPatientDialogModule";

@NgModule({
    imports: [
        PromptDialogModule,
        CodeFormModule,
        VisitDetailsDialogModule,
        EpisodeDetailsDialogModule,
        UpdateEpisodeDialogModule,
        CreateSubVisitDialogModule,
        ChangeEpisodeDialogModule,
        CloseEpisodeDialogModule,
        AddPatientDialogModule
    ],
    exports: [
        PromptDialogModule,
        CodeFormModule,
        VisitDetailsDialogModule,
        EpisodeDetailsDialogModule,
        UpdateEpisodeDialogModule,
        CreateSubVisitDialogModule,
        ChangeEpisodeDialogModule,
        CloseEpisodeDialogModule,
        AddPatientDialogModule
    ],
    declarations: []
})
export class IcpcDialogsModule {

}
