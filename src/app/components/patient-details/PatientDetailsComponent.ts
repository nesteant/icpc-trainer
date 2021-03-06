import {Component, Input, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeLast';
import {Patient} from '../../model/Patient';
import {MatDialog} from '@angular/material';
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

  public showClosedEpisodes: boolean = false;
  @Input()
  public patient: Patient;

  constructor(public dialog: MatDialog, private patientsService: PatientsService) {

  }

  public toggleClosedEpisodes() {
    this.showClosedEpisodes = !this.showClosedEpisodes;
  }

  public get closedEpisodesToggleText() {
    return this.showClosedEpisodes ? 'Сховати закриті епізоди' : 'Показати закриті епізоди';
  }

  public get patientEpisodes() {
    return this.showClosedEpisodes ? this.patient.episodes : this.patient.episodes.filter(ep => !ep.ended);
  }

  public openCreateSubvisitDialog() {
    let dialogRef = this.dialog.open(CreateSubVisitDialogComponent, {
      height: '600px',
      width: '700px',
      data: {
        dialogTitle: 'Створення підвізиту',
        episodes: this.patient.episodes.filter(e => !e.ended)
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
    return `Епізоди (${this.episodesCount}/${this.episodesClosedCount})`;
  }

  public get visitsLabel() {
    return `Візити (${this.visitsCount})`;
  }

  public get episodesCount() {
    return this.patient.episodes ? this.patient.episodes.filter(ep => !ep.ended).length : 0;
  }

  public get episodesClosedCount() {
    return this.patient.episodes ? this.patient.episodes.filter(ep => ep.ended).length : 0;
  }

  public get visitsCount() {
    return this.visits.length;
  }

  public get visits() {
    let entries = this.patient && this.patient.subVisits.reduce((acc, curr) => {

      let dateToFormat = new Date(curr.date);
        let fullYear = dateToFormat.getFullYear();
        let date = dateToFormat.getDate();
        let month = dateToFormat.getMonth() + 1;
        let monthStr = month > 9 ? '' + month : `0${month}`;
        let formattedDate = `${fullYear}-${monthStr}-${date}`;
      acc[formattedDate] ? acc[formattedDate].push(curr) : acc[formattedDate] = [curr];
      return acc;
    }, {});
    return Object.entries(entries).reduce((acc, [k, v]) => {
      acc.push({
        date: k,
        values: v
      });
      return acc;
    }, []);
  }
}
