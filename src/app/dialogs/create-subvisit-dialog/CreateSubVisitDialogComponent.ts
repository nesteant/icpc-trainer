import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {Episode} from '../../model/Episode';
import 'rxjs/add/operator/mergeMap';
import {IcpcCode} from '../../model/IcpcCode';
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

  public selectedTab: number = 0;
  public formGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateSubVisitDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              fb: FormBuilder) {
    this.episode = data.episode;
    this.patient = data.patient;
    this.episodes = data.episodes;
    this.dialogTitle = data.dialogTitle;
    this.formGroup = fb.group({
      date: new FormControl(null, [Validators.required]),
      episode: new FormControl(),
      diagnosis: new FormControl(),
      reasons: new FormControl(),
      actions: new FormControl()
    });
    this.formGroup.valueChanges.subscribe(v => console.log(v));
  }

  public ngOnInit() {
    if (this.episode) {
      this.formGroup.patchValue({
        episode: this.episode
      });
    }
  }

  public updateActions(codes: IcpcCode[]) {
    let actions = this.actionsField;
    actions.setValue(actions.value ? actions.value.concat(codes) : codes);
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

  public changeSelectedTab(index: number) {
    this.selectedTab = index;
    this.actionsField.setValue([]);
    this.updateActions([this.diagnosisField.value, ...this.reasonsField.value]);
  }

  public get previousActionCodes() {
    return (this.reasonsField.value || []).concat(this.diagnosisField.value);
  }

  public get previousReasonCodes() {
    return [];
  }

  public get previousDiagnosisCodes() {
    return this.reasonsField.value || [];
  }

  public nextTab() {
    this.selectedTab++;
  }

  public get diagnosesEnabled() {
    return !!(this.reasonsField.value || []).length;
  }

  public get actionsEnabled() {
    return !!this.diagnosisField.value && !!(this.reasonsField.value || []).length;
  }

  public get canSelectNext() {
    switch (this.selectedTab) {
      case 0:
        return !!(this.reasonsField.value || []).length;
      case 1:
        return !!this.diagnosisField.value;
      case 2:
        return false;
    }
  }

  public get canSave() {
    return this.diagnosisField.value && this.reasonsField.value && this.actionsField.value && this.formGroup.valid;
  }

  public save() {
    this.dialogRef.close(this.formGroup.value);
  }

}
