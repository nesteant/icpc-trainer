import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTab} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {SubVisit} from '../../model/SubVisit';
import {Episode} from '../../model/Episode';

@Component({
  selector: 'icpc-visit-details-dialog',
  templateUrl: 'visit-details-dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitDetailsDialogComponent {

  @Input()
  public episode: Episode;
  @Input()
  public visit: SubVisit;

  constructor(public dialogRef: MatDialogRef<VisitDetailsDialogComponent>,
              public cd: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.visit = data.visit;
    this.episode = data.episode;
  }

}
