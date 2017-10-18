import {Component, Inject, Input} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {FormControl} from '@angular/forms';
import {SubVisit} from '../../model/SubVisit';
import {Episode} from '../../model/Episode';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'icpc-episode-details-dialog',
  templateUrl: 'change-episode-dialog.html',
})
export class ChangeEpisodeDialogComponent {

  @Input()
  public visit: SubVisit;
  @Input()
  public episode: Episode;
  @Input()
  public episodes: Episode[];

  public episodeControl: FormControl = new FormControl();
  public episodeNameControl: FormControl = new FormControl();
  private newEpisode: Episode;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<ChangeEpisodeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.visit = data.visit;
    this.episode = data.episode;
    this.episodes = data.episodes.concat({
      id: -1,
      name: {
        diagnosis: this.visit.diagnosis,
        episode: 'Новий епізод'
      }
    }).filter(e => e.id !== this.episode.id);

    this.episodeControl.valueChanges.subscribe(v => this.newEpisode = v);
    this.episodeNameControl.valueChanges.subscribe(v => {
      this.newEpisode = {
        name: {
          diagnosis: this.visit.diagnosis,
          episode: v
        },
        subVisits: [],
        history: []
      }
    })
  }

  public save() {
    this.dialogRef.close(this.newEpisode);
  }

}
