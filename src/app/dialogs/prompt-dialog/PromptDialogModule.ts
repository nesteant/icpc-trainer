import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromptDialogComponent} from './PromptDialogComponent';
import {SharedModule} from '../../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PromptDialogComponent
  ],
  exports: [
    PromptDialogComponent
  ],
  entryComponents: [
    PromptDialogComponent
  ]
})
export class PromptDialogModule {

}
