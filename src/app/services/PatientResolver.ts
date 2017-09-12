import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/from';
import {PatientsService} from './PatientsService';
import 'rxjs/add/operator/take';

@Injectable()
export class PatientResolver implements Resolve<any> {
  constructor(private patientsService: PatientsService) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.patientsService.saved == undefined ? this.patientsService.preloadItems() : Observable.of(this.patientsService.saved);
  }
}
