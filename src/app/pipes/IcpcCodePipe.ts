import {Pipe, PipeTransform} from '@angular/core';
import {IcpcCode} from '../model/IcpcCode';

@Pipe({
  name: 'icpcCode'
})
export class IcpcCodePipe implements PipeTransform {

  //TODO: split to 2 filters
  public transform(value: IcpcCode, field?: string): any {
    return value && (field ? value[field] : `${value.code} - ${value.shortTitleUa}`);
  }
}
