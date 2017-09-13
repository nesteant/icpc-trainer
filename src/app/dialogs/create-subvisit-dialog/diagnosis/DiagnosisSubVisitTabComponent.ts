import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {IcpcCode} from '../../../model/IcpcCode';
import {IcpcService} from '../../../services/IcpcService';
import {MdAutocompleteSelectedEvent} from '@angular/material';
import {IcpcCodePipe} from '../../../pipes/IcpcCodePipe';

@Component({
  selector: 'icpc-diagnosis-subvisit-tab-action-tab',
  templateUrl: 'diagnosis-subvisit-tab.component.html'
})
export class DiagnosisSubVisitTabComponent implements OnInit {

  @Input()
  public diagnosisControl: FormControl;
  public diagnosisSearch: FormControl = new FormControl();
  public diagnosisOptions: Observable<IcpcCode[]>;

  constructor(private icpcService: IcpcService) {
  }

  public ngOnInit() {
    this.diagnosisOptions = this.diagnosisSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val, this.icpcService.diagnoses) : this.icpcService.diagnoses);
  }


  public onDiagnosisSelected(event: MdAutocompleteSelectedEvent) {
    console.log(event);
    // this.formGroup.get('name').setValue(this.formatDiagnosis(this.diagnosisField.value))
  }

  public formatDiagnosis(code: IcpcCode) {
    return new IcpcCodePipe().transform(code);
  }

  private filter(val: string, values: Observable<IcpcCode[]>): Observable<IcpcCode[]> {
    return values.map(codes => {
        return codes.filter(c => `${c.code} ${c.shortTitleUa}`.toLowerCase().indexOf(val.toLowerCase()) === 0);
      }
    );
  }

}
