import {Pipe, PipeTransform} from '@angular/core';
import {IcpcService} from '../services/IcpcService';

@Pipe({
  name: 'icpcTransform'
})
export class IcpcTransformPipe implements PipeTransform {

  constructor(private icpcService: IcpcService) {
  }

  public transform(value: string, ...args): any {
    return value && this.icpcService.codes
      .map(codes => (codes || []).find(code => code.code === value));
  }
}
