import {ChangeDetectorRef, Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {Episode} from '../../model/Episode';
import 'rxjs/add/operator/mergeMap';
import {Patient} from '../../model/Patient';

@Component({
  selector: 'icpc-create-subvisit-dialog',
  templateUrl: 'create-subvisit-dialog.html',
})
export class CreateSubVisitDialogComponent implements OnInit {

  @Input()
  public patient: Patient;
  @Input()
  public episodes: Episode[];

  @Input()
  public episode: Episode;
  public dialogTitle: string;
  public formGroup: FormGroup;

  constructor(cd: ChangeDetectorRef, public dialogRef: MatDialogRef<CreateSubVisitDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              fb: FormBuilder) {
    this.episode = data.episode;
    this.patient = data.patient;
    this.episodes = data.episodes;
    this.dialogTitle = data.dialogTitle;
    this.formGroup = fb.group({
      date: new FormControl(null, [Validators.required]),
      episode: new FormControl(null, [Validators.required]),
      diagnosis: new FormControl(null, [Validators.required]),
      reasons: new FormControl(null, [Validators.required]),
      actions: new FormControl(null, [Validators.required])
    });
  }


  public ngOnInit() {
    if (this.episode) {
      this.formGroup.patchValue({
        episode: this.episode
      });
    }
  }

  public get diagnosisValue() {
    return this.diagnosisField.value;
  }

  public get reasonsField() {
    return this.formGroup.get('reasons');
  }

  public get diagnosisField() {
    return this.formGroup.get('diagnosis');
  }

  public get actionsField() {
    return this.formGroup.get('actions');
  }

  public get canSave() {
    return this.diagnosisField.value &&
      this.reasonsField.value &&
      this.actionsField.value &&
      this.formGroup.get('episode') && this.formGroup.get('episode').value &&
      this.formGroup.valid;
  }

  public save() {
    this.dialogRef.close(this.formGroup.value);
  }

}
