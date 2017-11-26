import {Component, Input} from '@angular/core';
import {UpdateEpisodeDialogComponent} from '../../dialogs/update-episode-dialog/UpdateEpisodeDialogComponent';
import {Episode} from '../../model/Episode';
import {EpisodeDetailsDialogComponent} from '../../dialogs/episode-details-dialog/EpisodeDetailsDialogComponent';
import {PatientsService} from '../../services/PatientsService';
import {CreateSubVisitDialogComponent} from '../../dialogs/create-subvisit-dialog/CreateSubVisitDialogComponent';
import {Patient} from '../../model/Patient';
import {MatDialog} from '@angular/material';
import {SubVisit} from '../../model/SubVisit';
import {VisitDetailsDialogComponent} from '../../dialogs/visit-details-dialog/VisitDetailsDialogComponent';

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

  constructor(public dialog: MatDialog, private patientsService: PatientsService) {
  }

  public getVisit(id: number) {
    return this.patient.subVisits.find(v => v.id === id);
  }


  public openEditEpisodeModal(episode: Episode) {
    let dialogRef = this.dialog.open(UpdateEpisodeDialogComponent, {
      height: '600px',
      width: '700px',
      data: {
        patient: this.patient,
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
      episode.name = episodeForm;
      this.patientsService.updateEpisode(this.patient, episode)
    });
  }

  public openEpisodeDetailsModal(episode: Episode) {
    let dialogRef = this.dialog.open(EpisodeDetailsDialogComponent, {
      height: '600px',
      width: '700px',
      data: {
        episode: episode,
        patient: this.patient
      }
    });
  }

  public openVisitDetailsModal(visit: SubVisit) {
    let dialogRef = this.dialog.open(VisitDetailsDialogComponent, {
      height: '600px',
      width: '700px',
      data: {
        episode: this.episode,
        visit: visit
      }
    });
    dialogRef.afterClosed().subscribe(visitUpdate => {
      visitUpdate && this.patientsService.updateVisit(this.patient, visitUpdate as SubVisit);
    })
  }

  public openCreateSubvisitDialog(episode: Episode) {
    let dialogRef = this.dialog.open(CreateSubVisitDialogComponent, {
      height: '600px',
      width: '700px',
      data: {
        dialogTitle: 'Створення підвізиту',
        patient: this.patient,
        episode: episode,
        episodes: this.patient.episodes
      }
    });
    dialogRef.afterClosed().subscribe(episodeForm => {
      if (!episodeForm) {
        return;
      }
      let newEpisode = episodeForm.episode;
      if (newEpisode.id) {
        this.patientsService.updateEpisode(this.patient, newEpisode)
      } else {
        newEpisode.id = ++id;
        this.patientsService.createEpisode(this.patient, newEpisode);
      }
      this.patientsService.createSubivsit(this.patient, newEpisode, {
        id: ++id,
        date: episodeForm.date,
        diagnosis: episodeForm.diagnosis,
        reasons: episodeForm.reasons,
        actions: episodeForm.actions
      })
    });
  }
}
