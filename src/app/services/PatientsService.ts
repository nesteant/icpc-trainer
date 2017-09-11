import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {PatientsStore} from '../stores/PatientsStore';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Patient} from '../model/Patient';
import 'rxjs/add/operator/first';

@Injectable()
export class PatientsService {
  public patients: Observable<Patient[]>;
  public selectedPatient: Observable<Patient>;

  constructor(private httpClient: HttpClient, private store: Store<PatientsStore>) {
    this.patients = store.select('patients'); // Bind an observable of our patients to "ItemsService"
    this.selectedPatient = store.select('patient'); // Bind an observable of our patients to "ItemsService"
  }

  public loadItems() {
    console.log('LOAD');
    return this.httpClient.get('assets/patients.json')
      .map(payload => ({type: 'ADD_ITEMS', payload}))
      .subscribe(action => this.store.dispatch(action));
  }

  public getPatient(id: string) {
    return this.httpClient.get<Patient[]>('assets/patients.json')
      .map(patients => {
        return patients.filter(p => p.id === id);
      })
      .map(payload => {
        return ({type: 'SELECT_ITEM', payload: payload[0]});
      })
      .subscribe(action => this.store.dispatch(action));
  }

}
