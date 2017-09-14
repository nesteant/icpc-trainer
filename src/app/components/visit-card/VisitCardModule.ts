import {NgModule} from '@angular/core';
import {SharedModule} from '../../SharedModule';
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdTabsModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {VisitCardComponent} from './VisitCardComponent';

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
  exports: [
    VisitCardComponent
  ],
  declarations: [
    VisitCardComponent
  ]
})
export class VisitCardModule {

}
