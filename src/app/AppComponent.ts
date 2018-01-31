import {Component, OnInit} from '@angular/core';
import {PatientsService} from './services/PatientsService';
import {IcpcService} from "./services/IcpcService";
import {MatDialog} from "@angular/material";
import {AddPatientDialogComponent} from "./dialogs/add-patient-dialog/AddPatientDialogComponent";

@Component({
    selector: 'icpc-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    //TODO:nesteant: added to sync. Should be revised and iomplemented normally ngrx
    constructor(public dialog: MatDialog, private patientService: PatientsService, private icpcService: IcpcService) {
    }

    public ngOnInit() {
    }

    public logout() {
        this.patientService.clearContext();
        window.location.href = '/';
    }

    public get loggedIn() {
        return !!this.patientService.getContext();
    }

    public openCreatePatient() {
        let dialogRef = this.dialog.open(AddPatientDialogComponent, {
            height: '300px',
            width: '450px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(patientForm => {
            this.patientService.addPatient(Object.assign({
                id: '' + (this.patientService.saved.length + 1),
                episodes: [],
                subVisits: [],
            }, patientForm));
        });
    }
}
