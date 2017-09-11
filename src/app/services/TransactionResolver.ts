import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/from';
import {PatientsService} from './PatientsService';
import 'rxjs/add/operator/take';

@Injectable()
export class TransactionResolver implements Resolve<any> {
  constructor(private patientsService: PatientsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.patientsService.getPatient(route.params.id);
    return this.patientsService.selectedPatient.take(1);
  }
}
