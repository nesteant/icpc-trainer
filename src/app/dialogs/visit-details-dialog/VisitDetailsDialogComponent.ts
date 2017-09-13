import {Component, Inject, Input, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {IcpcService} from '../../services/IcpcService';
import 'rxjs/add/operator/mergeMap';
import {Visit} from '../../model/Visit';

@Component({
  selector: 'icpc-visit-details-dialog',
  templateUrl: 'visit-details-dialog.html',
})
export class VisitDetailsDialogComponent implements OnInit {

  @Input()
  public visit: Visit;

  constructor(private icpcService: IcpcService,
              public dialogRef: MdDialogRef<VisitDetailsDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              fb: FormBuilder) {
    this.visit = data.visit;
  }

  public ngOnInit() {
  }


}
