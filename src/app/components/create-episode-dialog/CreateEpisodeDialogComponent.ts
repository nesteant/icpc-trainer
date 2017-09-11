import {Component, Inject, Input, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdAutocompleteSelectedEvent, MdDialogRef} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import {Episode} from '../../model/Episode';
import {IcpcService} from '../../services/IcpcService';
import 'rxjs/add/operator/mergeMap';
import {IcpcCode} from '../../model/IcpcCode';

@Component({
  selector: 'icpc-create-episode-dialog',
  templateUrl: 'create-episode-dialog.html',
})
export class CreateEpisodeDialogComponent implements OnInit {

  @Input()
  public episode: Episode;
  public ctrl: FormControl = new FormControl();
  public actionReasonOptions: Observable<IcpcCode[]>;

  public selectedReasons: string[] = [];

  constructor(private icpcService: IcpcService, public dialogRef: MdDialogRef<CreateEpisodeDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.episode = data.episode;
  }

  public onReasonSelected(event: MdAutocompleteSelectedEvent) {
    this.selectedReasons.push(event.option.value);
  }

  public ngOnInit() {
    this.actionReasonOptions = this.ctrl.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val) : this.icpcService.codes);
  }

  public filter(val: string): Observable<IcpcCode[]> {
    return this.icpcService.codes.map(codes => {
        return codes.filter(c => c.shortTitleUa.toLowerCase().indexOf(val.toLowerCase()) === 0);
      }
    );
  }

}
