import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';
import {VisitDetailsDialogComponent} from './VisitDetailsDialogComponent';
import {CodeFormModule} from '../../components/code-form/CodeFormModule';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CodeFormModule
  ],
  declarations: [
    VisitDetailsDialogComponent
  ],
  exports: [
    VisitDetailsDialogComponent
  ],
  entryComponents: [
    VisitDetailsDialogComponent
  ]
})
export class VisitDetailsDialogModule {

}
