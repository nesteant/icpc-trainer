import {Component, Inject, Input} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Episode} from '../../model/Episode';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'icpc-close-episode-dialog',
  templateUrl: 'close-episode-dialog.html',
})
export class CloseEpisodeDialogComponent {
  @Input()
  public episode: Episode;

  public date: FormControl = new FormControl();

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<CloseEpisodeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.episode = data.episode;
  }

  public save() {
    this.dialogRef.close(this.date.value);
  }

}
