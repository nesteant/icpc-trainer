import {Pipe, PipeTransform} from '@angular/core';
import {Episode} from '../model/Episode';
import {IcpcService} from '../services/IcpcService';

@Pipe({
  name: 'episode',
  pure: false
})
export class EpisodePipe implements PipeTransform {

  constructor(private icpcService: IcpcService) {
  }

  public transform(value: Episode, ...args): any {
    if (!value) {
      return '';
    }
    let diagnosis = this.icpcService.staticCodes && this.icpcService.staticCodes
      .find(code => code.code === value.name.diagnosis);
    let postfix = value.name.episode ? ` - ${value.name.episode}` : '';
    return value && diagnosis && `${diagnosis.code} ${diagnosis.shortTitleUa}${postfix}`;
  }
}
