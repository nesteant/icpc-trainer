import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import {Episode} from '../../model/Episode';
import 'rxjs/add/operator/mergeMap';
import {Patient} from '../../model/Patient';

@Component({
    selector: 'icpc-create-subvisit-dialog',
    templateUrl: 'add-patient-dialog.html'
})
export class AddPatientDialogComponent implements OnInit {

    @Input()
    public patient: Patient;
    @Input()
    public episodes: Episode[];

    @Input()
    public episode: Episode;
    public dialogTitle: string;
    public formGroup: FormGroup;

    constructor(public dialogRef: MatDialogRef<AddPatientDialogComponent>,
                public dialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) public data: any,
                fb: FormBuilder) {
        this.formGroup = fb.group({
            name: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            birthday: new FormControl(new Date(), [Validators.required]),
        });
    }


    public ngOnInit() {
    }

    public get canSave() {
        return this.formGroup.valid;
    }

    public save() {
        this.canSave && this.dialogRef.close(this.formGroup.value);
    }

}
