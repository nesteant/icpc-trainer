import {NgModule} from '@angular/core';
import {SharedModule} from '../../SharedModule';
import {CommonModule} from '@angular/common';
import {VisitCardComponent} from './VisitCardComponent';
import {SubVisitCardModule} from '../subvisit-card/SubVisitCardModule';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SubVisitCardModule
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
