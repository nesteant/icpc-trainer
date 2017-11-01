import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CreateSubVisitService {

  public onSave: Subject<void> = new Subject<void>();
}
