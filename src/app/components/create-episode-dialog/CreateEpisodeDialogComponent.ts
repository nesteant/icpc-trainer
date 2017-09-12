import {Component, Inject, Input, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdAutocompleteSelectedEvent, MdDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import {Episode} from '../../model/Episode';
import {IcpcService} from '../../services/IcpcService';
import 'rxjs/add/operator/mergeMap';
import {IcpcCode} from '../../model/IcpcCode';
import {IcpcCodePipe} from '../../pipes/IcpcCodePipe';

@Component({
  selector: 'icpc-create-episode-dialog',
  templateUrl: 'create-episode-dialog.html',
})
export class CreateEpisodeDialogComponent implements OnInit {

  @Input()
  public episode: Episode;
  public dialogTitle: string;
  public reasonSearch: FormControl = new FormControl();
  public diagnosisSearch: FormControl = new FormControl();
  public actionSearch: FormControl = new FormControl();
  public reasonOptions: Observable<IcpcCode[]>;
  public actionOptions: Observable<IcpcCode[]>;
  public diagnosisOptions: Observable<IcpcCode[]>;
  public selectedTab: number = 0;
  public formGroup: FormGroup;

  constructor(private icpcService: IcpcService,
              public dialogRef: MdDialogRef<CreateEpisodeDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              fb: FormBuilder) {
    this.episode = data.episode;
    this.dialogTitle = data.dialogTitle;
    this.formGroup = fb.group({
      date: new FormControl(),
      name: new FormControl(),
      diagnosis: new FormControl(),
      reasons: new FormControl(),
      actions: new FormControl()
    });
  }

  public ngOnInit() {
    if (this.episode) {
      this.formGroup.patchValue({
        name: this.episode.name
      });
    }
    this.reasonOptions = this.reasonSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val, this.icpcService.reasons) : this.icpcService.reasons);
    this.diagnosisOptions = this.diagnosisSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val, this.icpcService.diagnoses) : this.icpcService.diagnoses);
    this.actionOptions = this.actionSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val, this.icpcService.actions) : this.icpcService.actions);
  }

  public onDiagnosisSelected(event: MdAutocompleteSelectedEvent) {
    // this.formGroup.get('name').setValue(this.formatDiagnosis(this.diagnosisField.value))
  }

  public onReasonSelected(event: MdAutocompleteSelectedEvent) {
    let reasons = this.reasonsField;
    reasons.setValue(reasons.value ? reasons.value.concat(event.option.value) : [event.option.value]);
    this.reasonSearch.reset();
  }

  public updateActions(codes: IcpcCode[]) {
    let actions = this.actionsField;
    actions.setValue(actions.value ? actions.value.concat(codes) : codes);
  }

  public onActionSelected(event: MdAutocompleteSelectedEvent) {
    this.updateActions(event.option.value ? [event.option.value] : []);
    this.actionSearch.reset();
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

  public filter(val: string, values: Observable<IcpcCode[]>): Observable<IcpcCode[]> {
    return values.map(codes => {
        return codes.filter(c => `${c.code} ${c.shortTitleUa}`.toLowerCase().indexOf(val.toLowerCase()) === 0);
      }
    );
  }

  public changeSelectedTab(index: number) {
    this.selectedTab = index;
    this.actionsField.setValue([]);
    this.updateActions([this.diagnosisField.value, ...this.reasonsField.value]);
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
    return this.diagnosisField.value && this.reasonsField.value && this.actionsField.value;
  }

  public save() {
    this.dialogRef.close(this.formGroup.value);
  }


  public deleteReason(index: number) {
    let value = this.reasonsField.value || [];
    value.splice(index, 1);
    this.reasonsField.setValue(value);
  }

  public deleteAction(index: number) {
    let value = this.actionsField.value || [];
    value.splice(index, 1);
    this.actionsField.setValue(value);
  }

  public formatDiagnosis(code: IcpcCode) {
    return new IcpcCodePipe().transform(code);
  }

}
