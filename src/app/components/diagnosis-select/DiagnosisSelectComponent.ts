import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {IcpcCode} from '../../model/IcpcCode';
import {Observable} from 'rxjs/Observable';
import {IcpcService} from '../../services/IcpcService';
import {IcpcCodePipe} from '../../pipes/IcpcCodePipe';
import {noop} from 'rxjs/util/noop';

@Component({
  selector: 'icpc-diagnosis-select',
  templateUrl: 'diagnosis-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DiagnosisSelectComponent),
      multi: true
    }
  ]
})
export class DiagnosisSelectComponent implements OnInit, ControlValueAccessor {

  @Input()
  public autocomplete: boolean = false;
  public diagnosisControl: FormControl = new FormControl();
  public diagnosisSearch: FormControl = new FormControl();
  public diagnosisOptions: Observable<IcpcCode[]>;
  public onChange: any = noop;

  constructor(private icpcCodePipe: IcpcCodePipe, private icpcService: IcpcService) {
  }

  public ngOnInit() {
    this.diagnosisOptions = this.diagnosisSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val, this.icpcService.diagnoses) : this.icpcService.diagnoses);
    this.diagnosisControl.valueChanges.subscribe(v => {
      this.onChange(this.icpcService.staticCodes.find(c => c.code === v));
    })
  }

  public writeValue(obj: any): void {
    this.diagnosisControl.setValue(obj && obj.code);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public formatDiagnosis = (code: string) => {
    let value = this.icpcService.staticCodes.find(c => c.code === code);
    return this.icpcCodePipe.transform(value);
  }

  private filter(val: string, values: Observable<IcpcCode[]>): Observable<IcpcCode[]> {
    return values.map(codes => {
        return codes.filter(c => `${c.code} ${c.shortTitleUa}`.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
    );
  }
}
