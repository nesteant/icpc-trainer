import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {PatientsStore} from '../stores/PatientsStore';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Patient} from '../model/Patient';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Episode} from '../model/Episode';
import 'rxjs/add/operator/do';
import {SubVisit} from '../model/SubVisit';

@Injectable()
export class PatientsService {
  public patients: Observable<Patient[]>;
  public selectedPatient: Observable<Patient>;
  public saved: Patient[];

  constructor(private httpClient: HttpClient, private store: Store<PatientsStore>) {
    this.patients = store.select('patients'); // Bind an observable of our patients to "ItemsService"
    this.selectedPatient = store.select('patient'); // Bind an observable of our patients to "ItemsService"
  }

  public preloadItems() {
    return this.httpClient.get<Patient[]>('assets/rest/patients.json').do(patients => {
      this.saved = this.getContext() || patients;
    });
  }

  public loadItems() {
    return Observable.of(this.saved)
      .delay(200)
      .map(payload => ({type: 'ADD_ITEMS', payload}))
      .subscribe(action => this.store.dispatch(action));
  }

  public createSubivsit(patient: Patient, episode: Episode, visit: SubVisit) {
    this.saved
      .filter(p => p.id === patient.id)
      .forEach(p => {
        p.subVisits.push(visit);
        let updateableEpisode = p.episodes.find(e => e.id === episode.id);
        updateableEpisode.subVisits.push(visit.id);
      });
    this.saveContext();
    // this.store.dispatch({type: 'CREATE_EPISODE', payload: patient});
  }

  public updateVisit(patient: Patient, visit: SubVisit) {
    this.saved.filter(p => p.id === patient.id)
      .map(p => p.subVisits.find(v => v.id === visit.id))
      .forEach(v => {
        v.diagnosis = visit.diagnosis;
        v.reasons = visit.reasons;
        v.actions = visit.actions;
      });
    this.saveContext();
  }

  public rearrangeVisit(patient: Patient, visit: SubVisit, oldEpisode: Episode, newEpisode: Episode) {
    this.saved
      .filter(p => p.id === patient.id)
      .map(p => p.episodes)
      .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
      .filter(e => {
        return e.id === oldEpisode.id;
      })
      .forEach(e => {
        e.subVisits = e.subVisits.filter(v => v !== visit.id);
      });
    this.saved
      .filter(p => p.id === patient.id)
      .map(p => p.episodes)
      .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
      .filter(e => {
        return e.id === newEpisode.id;
      })
      .forEach(e => e.subVisits.push(visit.id));
    this.saveContext();
    // this.store.dispatch({type: 'CREATE_EPISODE', payload: episode});
  }

  public updateEpisode(patient: Patient, episode: Episode) {
    this.saved
      .filter(p => p.id === patient.id)
      .map(p => p.episodes)
      .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
      .filter(e => {
        return e.id === episode.id;
      })
      .forEach(e => {
        e.name = episode.name;
        e.subVisits = episode.subVisits;
      });
    this.saveContext();
    // this.store.dispatch({type: 'CREATE_EPISODE', payload: episode});
  }

  public createEpisode(patient: Patient, episode: Episode) {
    this.saved.filter(p => p.id === patient.id).forEach(p => p.episodes.push(episode));
    this.saveContext();
    // this.store.dispatch({type: 'CREATE_EPISODE', payload: episode});
  }

  public getPatient(id: string) {
    return Observable.of(this.saved)
      .map(patients => {
        return patients.filter(p => p.id === id);
      })
      .map(payload => {
        return ({type: 'SELECT_ITEM', payload: payload[0]});
      })
      .subscribe(action => this.store.dispatch(action));
  }

  public saveContext() {
    localStorage.setItem('patients', JSON.stringify(this.saved));
  }

  public getContext() {
    return JSON.parse(localStorage.getItem('patients'));
  }

  public clearContext() {
    localStorage.clear();
  }

}
