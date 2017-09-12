import {NgModule} from '@angular/core';
import {IcpcCodePipe} from './pipes/IcpcCodePipe';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    IcpcCodePipe
  ],
  exports: [
    IcpcCodePipe
  ],
  imports: [
    CommonModule,
  ],
  providers: [
      IcpcCodePipe
  ]
})
export class SharedModule {
}
