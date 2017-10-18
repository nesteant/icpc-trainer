import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {PatientsStore} from '../stores/PatientsStore';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import {IcpcCode} from '../model/IcpcCode';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class IcpcService {
  public codes: Observable<IcpcCode[]>;

  public actions: Observable<IcpcCode[]>;
  public diagnoses: Observable<IcpcCode[]>;
  public reasons: Observable<IcpcCode[]>;

  constructor(private httpClient: HttpClient, private store: Store<PatientsStore>) {
    let codes = new BehaviorSubject<IcpcCode[]>([]);
    store.select('icpc').filter(codes => true).subscribe(codes);
    this.codes = codes;
  }

  public loadItems() {
    return this.httpClient.get<IcpcCode[]>('assets/icpc.json')
      .do(codes => {
        let actions: IcpcCode[] = [];
        let reasons: IcpcCode[] = [];
        let diagnoses: IcpcCode[] = [];

        codes.forEach(code => {
          let reasonFilter = true;

          let diagnosisExec = /[A-Z](\d{2})/gi.exec(code.code);
          let diagnosisCode = parseInt(diagnosisExec && diagnosisExec[1]);
          if (reasonFilter) {
            reasons.push(code);
          }
          if (diagnosisCode <= 29 || diagnosisCode >= 70 && diagnosisCode <= 99) {
            diagnoses.push(code);
          }
          if (code.code.startsWith('-')) {
            actions.push(code);
          }
        });
        this.actions = Observable.of(actions);
        this.reasons = Observable.of(reasons);
        this.diagnoses = Observable.of(diagnoses);
      })
      .map(payload => ({type: 'LOAD_ITEMS', payload}))
      .subscribe(action => this.store.dispatch(action));
  }

}
