import {Component, Input, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeLast';
import {Patient} from '../../model/Patient';
import {MdDialog} from '@angular/material';
import {Episode} from '../../model/Episode';
import {CreateEpisodeDialogComponent} from '../create-episode-dialog/CreateEpisodeDialogComponent';
import {PatientsService} from '../../services/PatientsService';
import {UpdateEpisodeDialogComponent} from '../update-episode-dialog/UpdateEpisodeDialogComponent';
import {EpisodeDetailsDialogComponent} from '../episode-details-dialog/EpisodeDetailsDialogComponent';


let id = 44;

@Component({
  selector: 'icpc-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PatientDetailsComponent {

  @Input()
  public patient: Patient;

  constructor(public dialog: MdDialog, private patientsService: PatientsService) {

  }

  public openEpisodeDetailsModal(episode: Episode) {
    let dialogRef = this.dialog.open(EpisodeDetailsDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        episode: episode
      }
    });
  }

  public openEditEpisodeModal(episode: Episode) {
    let dialogRef = this.dialog.open(UpdateEpisodeDialogComponent, {
      height: '400px',
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

  public openAddVisitModal(episode: Episode) {
    let dialogRef = this.dialog.open(CreateEpisodeDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        episode: episode,
        dialogTitle: 'Створення візіту'
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
      episode.visits.push({
        id: '' + ++id,
        date: episodeForm.date,
        diagnosis: episodeForm.diagnosis,
        reasons: episodeForm.reasons,
        actions: episodeForm.actions
      });
      this.patientsService.updateEpisode(this.patient, episode)
    });
  }

  public openAddEpisodeModal() {
    let dialogRef = this.dialog.open(CreateEpisodeDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        dialogTitle: 'Створення епізоду'
      }
    });
    dialogRef.afterClosed().subscribe(episodeForm => {
      if (!episodeForm) {
        return;
      }
      let episode: Episode = {
        name: episodeForm.name,
        id: '' + ++id,
        history: [],
        visits: [{
          id: '' + ++id,
          date: episodeForm.date,
          diagnosis: episodeForm.diagnosis,
          reasons: episodeForm.reasons,
          actions: episodeForm.actions,
        }]
      };
      this.patientsService.createEpisode(this.patient, episode)
    });
  }

  public get episodesLabel() {
    return `Епізоди (${this.episodesCount})`;
  }

  public get visitsLabel() {
    return `Візити (${this.visitsCount})`;
  }

  public get episodesCount() {
    return this.patient.episodes ? this.patient.episodes.length : 0;
  }

  public get visitsCount() {
    return this.patient.visits ? this.patient.visits.length : 0;
  }
}
