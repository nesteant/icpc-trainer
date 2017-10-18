import {NgModule} from '@angular/core';
import {SharedModule} from '../../SharedModule';
import {CommonModule} from '@angular/common';
import {VisitCardComponent} from './VisitCardComponent';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VisitCardComponent
  ],
  declarations: [
    VisitCardComponent
  ]
})
export class VisitCardModule {

}
