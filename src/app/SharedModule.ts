import {NgModule} from '@angular/core';
import {IcpcCodePipe} from './pipes/IcpcCodePipe';
import {CommonModule} from '@angular/common';
import {EpisodePipe} from './pipes/EpisodePipe';
import {IcpcTransformPipe} from './pipes/IcpcTransformPipe';

@NgModule({
  declarations: [
    IcpcCodePipe,
    IcpcTransformPipe,
    EpisodePipe
  ],
  exports: [
    IcpcCodePipe,
    IcpcTransformPipe,
    EpisodePipe
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    IcpcCodePipe,
    IcpcTransformPipe,
    EpisodePipe
  ]
})
export class SharedModule {
}
