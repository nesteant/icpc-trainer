import {Component, Inject, Input, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {SubVisit} from '../../model/SubVisit';

@Component({
  selector: 'icpc-visit-details-dialog',
  templateUrl: 'visit-details-dialog.html',
})
export class VisitDetailsDialogComponent implements OnInit {

  @Input()
  public visit: SubVisit;

  constructor(public dialogRef: MdDialogRef<VisitDetailsDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.visit = data.visit;
  }

  public ngOnInit() {
  }


}
