import {Component, Inject, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Episode} from '../../model/Episode';
import {VisitDetailsDialogComponent} from '../visit-details-dialog/VisitDetailsDialogComponent';
import {Patient} from '../../model/Patient';
import {SubVisit} from '../../model/SubVisit';
import {ChangeEpisodeDialogComponent} from '../change-episode-dialog/ChangeEpisodeDialogComponent';
import {PatientsService} from '../../services/PatientsService';
import {UpdateEpisodeDialogComponent} from '../update-episode-dialog/UpdateEpisodeDialogComponent';
import {CloseEpisodeDialogComponent} from '../close-episode-dialog/CloseEpisodeDialogComponent';
import {CreateSubVisitDialogComponent} from '../create-subvisit-dialog/CreateSubVisitDialogComponent';

let id = 1000;

@Component({
  selector: 'icpc-episode-details-dialog',
  templateUrl: 'episode-details-dialog.html',
  styleUrls: ['episode-details.css']
})
export class EpisodeDetailsDialogComponent implements OnInit {

  @Input()
  public patient: Patient;

  @Input()
  public episode: Episode;

  public formGroup: FormGroup;

  constructor(private patientsService: PatientsService,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<EpisodeDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              fb: FormBuilder) {
    this.episode = data.episode;
    this.patient = data.patient;
    this.formGroup = fb.group({
      name: new FormControl(),
      comments: new FormControl()
    });
  }

  public ngOnInit(): void {
    this.formGroup.patchValue({
      name: this.episode.name,
      comments: this.episode.comments
    })
  }

  public getVisit(id: number) {
    return this.patient.subVisits.find(v => v.id === id);
  }

  public get visitsLabel() {
    return `Підвізіти (${(this.episode.subVisits || []).length})`;
  }

  public openVisitDetailsModal(event: Event, visit: SubVisit) {
    if ((<any> event.target).innerHTML === 'more_horiz') {
      return;
    }
    let dialogRef = this.dialog.open(VisitDetailsDialogComponent, {
      height: '600px',
      width: '700px',
      data: {
        episode: this.episode,
        visit: visit
      }
    });
  }

  public saveComment(episode: Episode) {
    episode.comments = this.formGroup.get('comments').value;
    this.patientsService.updateEpisode(this.patient, episode);
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

  public openChangeEpisodeDialog(event: Event, visit: SubVisit) {
    event.stopPropagation();
    event.preventDefault();
    let dialogRef = this.dialog.open(ChangeEpisodeDialogComponent, {
      height: '600px',
      width: '700px',
      data: {
        visit: visit,
        episode: this.episode,
        episodes: this.patient.episodes
      }
    });
    dialogRef.afterClosed().subscribe(episode => {
      if (episode && !episode.id) {
        episode.id = ++id;
        this.patientsService.createEpisode(this.patient, episode);
      }
      if (episode && episode.id) {
        this.patientsService.rearrangeVisit(this.patient, visit, this.episode, episode);
      }
    })
  }

  public openCloseEpisodeDialog(episode: Episode) {
    let dialogRef = this.dialog.open(CloseEpisodeDialogComponent, {
      height: '300px',
      width: '400px',
      data: {
        episode: episode
      }
    });
    dialogRef.afterClosed().subscribe(date => {
      this.episode.endDate = date;
      date && (this.episode.ended = true);
      this.patientsService.updateEpisode(this.patient, this.episode);
    });
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
