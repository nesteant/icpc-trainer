import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/race';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Episode} from '../../../model/Episode';
import {EpisodePipe} from '../../../pipes/EpisodePipe';
import 'rxjs/add/operator/skipWhile';
import {Patient} from '../../../model/Patient';

let id = 99;

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

  @Input()
  public patient: Patient;
  @Input()
  public episodes: Episode[];
  public episodeSearch: FormControl = new FormControl();
  public episodeOptions: Observable<Episode[]>;
  public episodeCheckbox: FormControl = new FormControl();
  public episodeNameGroup: FormGroup;
  public onChange = (v: Episode) => {
  };
  public onTouched = (v: any) => {
  };
  public disabled = false;

  constructor(fb: FormBuilder) {
    this.episodeNameGroup = fb.group({
      diagnosis: new FormControl(null, Validators.required),
      episode: new FormControl(null, Validators.required)
    });
    this.episodeNameGroup.valueChanges.subscribe(v => this.onChange(v));
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

  public get diagnoses() {
    return this.episodeSearch.value && Object.keys(this.episodeSearch.value.subVisits
      .map(id => this.patient.subVisits.find(sv => sv.id === id))
      .map(sv => sv.diagnosis)
      .reduce((acc, cv) => {
        acc[cv] = cv;
        return acc;
      }, {})) || [];
  }

  public writeValue(obj: any): void {
    this.episodeSearch.setValue(obj);
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
    this.episodeOptions = this.episodeSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val && this.episodeCheckbox.value !== true ? this.filterEpisodes(val, Observable.of(this.episodes)) : []);
  }

  public filterEpisodes(val: string, values: Observable<Episode[]>): Observable<Episode[]> {
    return values.map(str => {
        return str.filter(c => `${c.name.diagnosis} ${c.name.episode}`.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
    );
  }

  public formatEpisode(episode: Episode) {
    return new EpisodePipe().transform(episode);
  }

}
