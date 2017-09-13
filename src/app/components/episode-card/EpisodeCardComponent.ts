import {Component, Input} from '@angular/core';
import {UpdateEpisodeDialogComponent} from '../../dialogs/update-episode-dialog/UpdateEpisodeDialogComponent';
import {Episode} from '../../model/Episode';
import {EpisodeDetailsDialogComponent} from '../../dialogs/episode-details-dialog/EpisodeDetailsDialogComponent';
import {PatientsService} from '../../services/PatientsService';
import {MdDialog} from '@angular/material';
import {CreateSubVisitDialogComponent} from '../../dialogs/create-subvisit-dialog/CreateSubVisitDialogComponent';
import {Patient} from '../../model/Patient';

let id = 199;

@Component({
  selector: 'icpc-episode-card',
  templateUrl: 'episode-card.component.html'
})
export class EpisodeCardComponent {
  @Input()
  public patient: Patient;
  @Input()
  public episode: Episode;

  constructor(public dialog: MdDialog, private patientsService: PatientsService) {
  }

  public getVisit(id: number) {
    return this.patient.subVisits.find(v => v.id === id);
  }


  public openEditEpisodeModal(episode: Episode) {
    let dialogRef = this.dialog.open(UpdateEpisodeDialogComponent, {
      height: '500px',
      width: '600px',
      data: {
        episode: episode
      }
    });
    dialogRef.afterClosed().subscribe(episodeForm => {
      if (!episodeForm) {
        return;
      }
      episode.history = episode.history || [];
      episode.history.push({
        name: episode.name,
        date: new Date().toISOString()
      });
      episode.name = episodeForm.name;
      this.patientsService.updateEpisode(this.patient, episode)
    });
  }

  public openEpisodeDetailsModal(episode: Episode) {
    let dialogRef = this.dialog.open(EpisodeDetailsDialogComponent, {
      height: '500px',
      width: '600px',
      data: {
        episode: episode,
        patient: this.patient
      }
    });
  }

  public openCreateSubvisitDialog(episode: Episode) {
    let dialogRef = this.dialog.open(CreateSubVisitDialogComponent, {
      height: '500px',
      width: '600px',
      data: {
        dialogTitle: 'Створення підвізиту',
        episode: episode,
        episodes: this.patient.episodes
      }
    });
    dialogRef.afterClosed().subscribe(episodeForm => {
      if (!episodeForm) {
        return;
      }
      if (episodeForm.episode.id) {
        this.patientsService.updateEpisode(this.patient, episodeForm.episode)
      } else {
        episodeForm.episode.id = ++id;
        this.patientsService.createEpisode(this.patient, episodeForm.episode);
      }
      this.patientsService.createSubivsit(this.patient, episodeForm.episode, {
        id: ++id,
        date: episodeForm.date,
        diagnosis: episodeForm.diagnosis,
        reasons: episodeForm.reasons,
        actions: episodeForm.actions
      })
    });
  }
}
