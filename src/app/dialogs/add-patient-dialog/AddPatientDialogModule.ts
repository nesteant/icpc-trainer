import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';
import {AddPatientDialogComponent} from './AddPatientDialogComponent';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        AddPatientDialogComponent
    ],
    exports: [
        AddPatientDialogComponent
    ],
    entryComponents: [
        AddPatientDialogComponent
    ]
})
export class AddPatientDialogModule {

}
