import {Pipe, PipeTransform} from '@angular/core';
import {IcpcCode} from '../model/IcpcCode';

@Pipe({
  name: 'icpcCode'
})
export class IcpcCodePipe implements PipeTransform {

  public transform(value: IcpcCode, ...args): any {
    return value && `${value.code} - ${value.shortTitleUa}`;
  }
}
