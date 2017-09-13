import {NgModule} from '@angular/core';
import {IcpcCodePipe} from './pipes/IcpcCodePipe';
import {CommonModule} from '@angular/common';
import {EpisodePipe} from './pipes/EpisodePipe';

@NgModule({
  declarations: [
    IcpcCodePipe,
    EpisodePipe
  ],
  exports: [
    IcpcCodePipe,
    EpisodePipe
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    IcpcCodePipe,
    EpisodePipe
  ]
})
export class SharedModule {
}
