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
  private LETTERS = ['A', 'B', 'D', 'F', 'H', 'K', 'L', 'N', 'P', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
  public codes: Observable<IcpcCode[]>;
  public staticCodes: IcpcCode[];

  public actions: Observable<IcpcCode[]>;
  public diagnoses: Observable<IcpcCode[]>;
  public reasons: Observable<IcpcCode[]>;

  constructor(private httpClient: HttpClient, private store: Store<PatientsStore>) {
    let codes = new BehaviorSubject<IcpcCode[]>([]);
    store.select('icpc').filter(codes => true).subscribe(codes);
    this.codes = codes;
    this.loadItems();
  }

  public loadItems() {
    return this.httpClient.get<IcpcCode[]>('assets/icpc.json')
      .do(codes => {
        let actions: IcpcCode[] = [];
        let reasons: IcpcCode[] = [];
        let diagnoses: IcpcCode[] = [];

        codes = codes.reduce((acc, code) => {
          let codeString = code.code;
          let cn = parseInt(codeString.replace(/[\D]/gi, ''), 10);
          let fitsDiapason = cn >= 31 && cn <= 47 || cn >= 49 && cn <= 62 || cn >= 64 && cn <= 69;
          if (codeString.startsWith('-') && fitsDiapason) {
            this.LETTERS.forEach(l => {
              let newCode = Object.assign({}, code);
              newCode.code = l + cn;
              acc.push(newCode);
            });
          } else {
            code.code = code.code.replace(/-/gi, '*');
            acc.push(code);
          }
          return acc;
        }, []).sort((a, b) => {
          if (a.code === b.code) {
            return 0;
          } else if (a.code > b.code) {
            return 1;
          } else {
            return -1;
          }
        });

        codes.forEach(code => {
          let cn = parseInt(code.code.replace(/\D/gi, ''));
          let reasonFilter = true;

          let diagnosisExec = /[A-Z](\d{2})/gi.exec(code.code);
          let diagnosisCode = parseInt(diagnosisExec && diagnosisExec[1]);
          if (reasonFilter) {
            reasons.push(code);
          }
          if (diagnosisCode <= 29 || diagnosisCode >= 70 && diagnosisCode <= 99) {
            diagnoses.push(code);
          }
          let actionCode = cn >= 30 && cn <= 59 || cn === 62 || cn >= 66 && cn <= 68;
          if (actionCode) {
            actions.push(code);
          }
        });
        this.actions = Observable.of(actions);
        this.reasons = Observable.of(reasons);
        this.diagnoses = Observable.of(diagnoses);
        this.staticCodes = codes;
      })
      .map(payload => ({type: 'LOAD_ITEMS', payload}))
      .subscribe(action => this.store.dispatch(action));
  }

}
