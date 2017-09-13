import {Component, Inject, Input} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {FormControl} from '@angular/forms';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';
import {SubVisit} from '../../model/SubVisit';
import {Episode} from '../../model/Episode';

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

  constructor(public dialog: MdDialog,
              public dialogRef: MdDialogRef<ChangeEpisodeDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.visit = data.visit;
    this.episode = data.episode;
    this.episodes = data.episodes.concat({
      id: -1,
      name: 'Новий епізод'
    }).filter(e => e.id !== this.episode.id);

    this.episodeControl.valueChanges.subscribe(v => this.newEpisode = v);
    this.episodeNameControl.valueChanges.subscribe(v => {
      this.newEpisode = {
        name: v,
        subVisits: [],
        history: []
      }
    })
  }

  public save() {
    this.dialogRef.close(this.newEpisode);
  }

}
