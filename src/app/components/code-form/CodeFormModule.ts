import {NgModule} from '@angular/core';

import {CodeFormComponent} from './CodeFormComponent';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../SharedModule';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [CodeFormComponent],
  declarations: [CodeFormComponent],
  providers: [],
})
export class CodeFormModule {
}
