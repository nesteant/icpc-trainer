import {NgModule} from '@angular/core';
import {SharedModule} from '../../SharedModule';
import {CommonModule} from '@angular/common';
import {SubVisitCardComponent} from './SubVisitCardComponent';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SubVisitCardComponent],
  declarations: [SubVisitCardComponent]
})
export class SubVisitCardModule {

}
