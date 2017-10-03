import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {IcpcCode} from '../../../model/IcpcCode';
import {IcpcService} from '../../../services/IcpcService';
import {MdAutocompleteSelectedEvent} from '@angular/material';

@Component({
  selector: 'icpc-reason-subvisit-tab-action-tab',
  templateUrl: 'reason-subvisit-tab.component.html'
})
export class ReasonSubVisitTabComponent implements OnInit {

  @Input()
  public reasonsControl: FormControl;
  public reasonOptions: Observable<IcpcCode[]>;
  public reasonSearch: FormControl = new FormControl();

  constructor(private icpcService: IcpcService) {
  }

  public ngOnInit() {
    this.reasonOptions = this.reasonSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val, this.icpcService.reasons) : this.icpcService.reasons);
  }

  public onReasonSelected(event: MdAutocompleteSelectedEvent) {
    let reasons = this.reasonsControl;
    reasons.setValue(reasons.value ? reasons.value.concat(event.option.value) : [event.option.value]);
    this.reasonSearch.reset();
  }

  public deleteReason(index: number) {
    let value = this.reasonsControl.value || [];
    value.splice(index, 1);
    this.reasonsControl.setValue(value);
  }

  private filter(val: string, values: Observable<IcpcCode[]>): Observable<IcpcCode[]> {
    return values.map(codes => {
        return codes.filter(c => `${c.code} ${c.shortTitleUa}`.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
    );
  }

}
