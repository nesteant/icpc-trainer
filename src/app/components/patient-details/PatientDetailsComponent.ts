import {Component, Input, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeLast';
import {Patient} from '../../model/Patient';
import {MdDialog} from '@angular/material';
import {PatientsService} from '../../services/PatientsService';
import {CreateSubVisitDialogComponent} from '../../dialogs/create-subvisit-dialog/CreateSubVisitDialogComponent';


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

  public openCreateSubvisitDialog() {
    let dialogRef = this.dialog.open(CreateSubVisitDialogComponent, {
      height: '500px',
      width: '600px',
      data: {
        dialogTitle: 'Створення підвізиту',
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
    return 0;
    // return this.patient.visits ? this.patient.visits.length : 0;
  }
}
