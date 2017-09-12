import {Component, Input, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeLast';
import {Patient} from '../../model/Patient';
import {MdDialog} from '@angular/material';
import {CreateVisitDialogComponent} from '../create-visit-dialog/CreateVisitDialogComponent';
import {Episode} from '../../model/Episode';
import {CreateEpisodeDialogComponent} from '../create-episode-dialog/CreateEpisodeDialogComponent';
import {PatientsService} from '../../services/PatientsService';

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

  public openEditEpisodeModal(episode: Episode) {
    let dialogRef = this.dialog.open(CreateVisitDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        episode: episode
      }
    });
    dialogRef.afterClosed().subscribe(v => {
    });
  }

  public openAddVisitModal(episode: Episode) {
    let dialogRef = this.dialog.open(CreateVisitDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        episode: episode
      }
    });
    dialogRef.afterClosed().subscribe(v => {
    });
  }

  public openAddEpisodeModal() {
    let dialogRef = this.dialog.open(CreateEpisodeDialogComponent, {
      height: '400px',
      width: '600px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(episodeForm => {
      if (!episodeForm) {
        return;
      }
      let episode: Episode = {
        name: episodeForm.name,
        id: '' + ++id,
        visits: [{
          id: '' + ++id,
          date: episodeForm.date,
          diagnoses: [episodeForm.diagnosis],
          reasons: episodeForm.reasons,
          actions: episodeForm.actions
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
