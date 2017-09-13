import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/race';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Episode} from '../../../model/Episode';
import {EpisodePipe} from '../../../pipes/EpisodePipe';
import 'rxjs/add/operator/skipWhile';

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
  public episodes: Episode[];
  public episodeSearch: FormControl = new FormControl();
  public episodeOptions: Observable<Episode[]>;
  public episodeCheckbox: FormControl = new FormControl();
  public onChange = (v: Episode) => {
  };
  public onTouched = (v: any) => {
  };
  public disabled = false;

  constructor() {
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
        return str.filter(c => c.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
      }
    );
  }

  public formatEpisode(episode: Episode) {
    return new EpisodePipe().transform(episode);
  }

}
