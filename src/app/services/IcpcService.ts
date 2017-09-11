import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {PatientsStore} from '../stores/PatientsStore';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import {IcpcCode} from '../model/IcpcCode';

@Injectable()
export class IcpcService {
  public codes: Observable<IcpcCode[]>;

  constructor(private httpClient: HttpClient, private store: Store<PatientsStore>) {
    this.codes = store.select('icpc');
  }

  public loadItems() {
    return this.httpClient.get<IcpcCode[]>('assets/icpc.json')
      .map(payload => ({type: 'LOAD_ITEMS', payload}))
      .subscribe(action => this.store.dispatch(action));
  }

}
