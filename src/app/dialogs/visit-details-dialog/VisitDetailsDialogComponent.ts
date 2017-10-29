import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import {SubVisit} from '../../model/SubVisit';
import {Episode} from '../../model/Episode';
import {IcpcCode} from '../../model/IcpcCode';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

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

  public formGroup: FormGroup;

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<VisitDetailsDialogComponent>,
              public cd: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.visit = data.visit;
    this.episode = data.episode;

    this.formGroup = fb.group({
      reasons: new FormArray(this.visit.reasons.map(r => new FormControl(r))),
      actions: new FormArray(this.visit.actions.map(a => new FormControl(a))),
      diagnosis: new FormControl(this.visit.diagnosis)
    })
  }

  public get reasonsArray() {
    return this.formGroup.get('reasons') as FormArray;
  }

  public get actionsArray() {
    return this.formGroup.get('actions') as FormArray;
  }

  public getControl(code: IcpcCode) {
    return new FormControl(code);
  }

  public save() {
    this.dialogRef.close(Object.assign({}, this.visit, this.formGroup.value));
  }
}
