import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdTabsModule} from '@angular/material';
import {SharedModule} from '../../SharedModule';
import {CommonModule} from '@angular/common';
import {SubVisitCardComponent} from './SubVisitCardComponent';

@NgModule({
  imports: [
    CommonModule,
    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    SharedModule
  ],
  exports: [SubVisitCardComponent],
  declarations: [SubVisitCardComponent]
})
export class SubVisitCardModule {

}
