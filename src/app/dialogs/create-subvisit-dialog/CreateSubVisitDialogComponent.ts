import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {Episode} from '../../model/Episode';
import 'rxjs/add/operator/mergeMap';
import {Patient} from '../../model/Patient';
import {CreateSubVisitService} from './CreateSubVisitService';
import {PromptDialogComponent} from '../prompt-dialog/PromptDialogComponent';

@Component({
  selector: 'icpc-create-subvisit-dialog',
  templateUrl: 'create-subvisit-dialog.html',
  providers: [CreateSubVisitService]
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

  constructor(private createSubVisitService: CreateSubVisitService,
              public dialogRef: MatDialogRef<CreateSubVisitDialogComponent>,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              fb: FormBuilder) {
    this.episode = data.episode;
    this.patient = data.patient;
    this.episodes = data.episodes;
    this.dialogTitle = data.dialogTitle;
    this.formGroup = fb.group({
      date: new FormControl(new Date(), [Validators.required]),
      episode: new FormControl(null, [Validators.required]),
      diagnosis: new FormControl(null, [Validators.required]),
      reasons: new FormControl(null, [Validators.required]),
      actions: new FormControl(null, [Validators.required])
    });
    let subFn = value => {
      let diagnosisMatches = !value || !this.episode || (this.episode.name.diagnosis.code === value.code);
      if (!diagnosisMatches) {
        let dr = this.dialog.open(PromptDialogComponent, {
          data: {
            text: 'Увага! Ви обрали діагноз відмінний від діагнозу епізоду. При продовженні, назва епізоду буде змінена у відповідності до зазначеного діагнозу. Щоб продовжити, натисніть “Так”'
          }
        });
        dr.afterClosed().subscribe(changed => {
          if (!changed) {
            this.formGroup.setControl('diagnosis', new FormControl());
            this.formGroup.get('diagnosis').valueChanges.subscribe(subFn);
          } else {
            this.episode.name.diagnosis = value;
            this.formGroup.setControl('diagnosis', new FormControl(value));
            this.formGroup.patchValue({episode: this.episode});
          }
        });
      }
    };
    this.formGroup.get('diagnosis').valueChanges.subscribe(subFn);
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
    this.createSubVisitService.onSave.next();
    this.formGroup.get('date').markAsTouched();
    this.canSave && this.dialogRef.close(this.formGroup.value);
  }

}
