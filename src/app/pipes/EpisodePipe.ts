import {Pipe, PipeTransform} from '@angular/core';
import {Episode} from '../model/Episode';

@Pipe({
  name: 'episode'
})
export class EpisodePipe implements PipeTransform {

  public transform(value: Episode, ...args): any {
    return value && `${value.name.episode} (${value.name.diagnosis})`;
  }
}
