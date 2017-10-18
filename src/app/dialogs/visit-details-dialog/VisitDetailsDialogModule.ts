import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';
import {VisitDetailsDialogComponent} from './VisitDetailsDialogComponent';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
