import {Component, forwardRef, Input, OnInit, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/race';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Episode} from '../../../model/Episode';
import {EpisodePipe} from '../../../pipes/EpisodePipe';
import 'rxjs/add/operator/skipWhile';
import {Patient} from '../../../model/Patient';
import {IcpcCode} from '../../../model/IcpcCode';
import {IcpcCodePipe} from '../../../pipes/IcpcCodePipe';
import {IcpcService} from '../../../services/IcpcService';
import {CreateSubVisitService} from '../CreateSubVisitService';

@Component({
  selector: 'icpc-episode-selector',
  templateUrl: 'episode-selector.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EpisodeSelectorComponent),
      multi: true
    }
  ]
})
export class EpisodeSelectorComponent implements OnInit, ControlValueAccessor {

  private _diagnosis: IcpcCode;
  @Input()
  public set diagnosis(code: IcpcCode) {
    this._diagnosis = code;
    if (this._diagnosis && this.episodeCheckbox.value) {
      this.episodeNameGroup.get('diagnosis').setValue(this._diagnosis);
      this._diagnosis = null;
    }
  };

  @Input()
  public patient: Patient;
  @Input()
  public episodes: Episode[];
  public episodeSearch: FormControl = new FormControl();
  public episodeOptions: Observable<Episode[]>;
  public episodeCheckbox: FormControl = new FormControl();
  public episodeNameGroup: FormGroup;
  public diagnosisSearch: FormControl = new FormControl();
  public diagnosisOptions: Observable<IcpcCode[]>;

  public onChange = (v: Episode) => {
  };
  public onTouched = (v: any) => {
  };
  public disabled = false;

  public marked = false;

  constructor(fb: FormBuilder,
              @Optional() createSubVisitService: CreateSubVisitService,
              private icpcService: IcpcService,
              private episodePipe: EpisodePipe) {
    this.episodeNameGroup = fb.group({
      diagnosis: new FormControl(null, Validators.required),
      episode: new FormControl(null, Validators.required)
    });
    createSubVisitService && createSubVisitService.onSave.subscribe(() => {
      this.marked = true;
      this.episodeNameGroup.get('diagnosis').markAsTouched();
      this.episodeNameGroup.get('episode').markAsTouched();
      this.episodeSearch.markAsTouched();
    });
    this.episodeCheckbox.valueChanges.subscribe(v => {
      this.diagnosis = this._diagnosis;
      if (this.marked) {
        this.marked = false;
        setTimeout(()=>{
          createSubVisitService && createSubVisitService.onSave.next();
        });
      }
    });
    this.episodeNameGroup.valueChanges.subscribe(v => this.onChange({
      name: v,
      history: [],
      subVisits: []
    }));
    this.episodeSearch.valueChanges.subscribe(v => {
        if (this.episodeCheckbox.value) {
          this.onChange({
            name: this.episodeSearch.value,
            history: [],
            subVisits: []
          });
        } else if (typeof v !== 'string') {
          this.onChange(v);
        }
      }
    );
  }

  public formatDiagnosis(code: IcpcCode) {
    return new IcpcCodePipe().transform(code);
  }

  private filter(val: string, values: Observable<IcpcCode[]>): Observable<IcpcCode[]> {
    return values.map(codes => {
        return codes.filter(c => `${c.code} ${c.shortTitleUa}`.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
    );
  }

  public writeValue(obj: any): void {
    this.episodeSearch.setValue(obj);
    obj && this.episodeCheckbox.setValue(false);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public ngOnInit() {
    this.diagnosisOptions = this.diagnosisSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val, this.icpcService.diagnoses) : this.icpcService.diagnoses);

    this.episodeOptions = this.episodeSearch.valueChanges
      .startWith(null)
      .mergeMap(val => this.filterEpisodes(val || this.formatEpisode(this.episodeSearch.value), Observable.of(this.episodes)));
    !this.episodes.length && this.episodeCheckbox.setValue(true);
  }

  public filterEpisodes(val: string, values: Observable<Episode[]>): Observable<Episode[]> {
    return values.map(str => {
        if (!val) {
          return str;
        }
        return str.filter(c => `${this.episodePipe.transform(c)}`.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
    );
  }

  public formatEpisode = (episode: Episode) => {
    return this.episodePipe.transform(episode);
  }
}
