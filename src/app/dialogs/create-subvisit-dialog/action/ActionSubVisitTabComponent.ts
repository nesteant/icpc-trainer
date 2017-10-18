import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {IcpcCode} from '../../../model/IcpcCode';
import {IcpcService} from '../../../services/IcpcService';
import {MatAutocompleteSelectedEvent} from '@angular/material';

@Component({
  selector: 'icpc-action-subvisit-tab-action-tab',
  templateUrl: 'action-subvisit-tab.component.html'
})
export class ActionSubVisitTabComponent implements OnInit {

  @Input()
  public actionsControl: FormControl;

  public actionSearch: FormControl = new FormControl();
  public actionOptions: Observable<IcpcCode[]>;

  constructor(private icpcService: IcpcService) {
  }

  public ngOnInit() {
    this.actionOptions = this.actionSearch.valueChanges
      .startWith(null)
      .mergeMap(val => val ? this.filter(val, this.icpcService.actions) : this.icpcService.actions);
  }

  public onActionSelected(event: MatAutocompleteSelectedEvent) {
    this.updateActions(event.option.value ? [event.option.value] : []);
    this.actionSearch.reset();
  }

  protected updateActions(codes: IcpcCode[]) {
    let actions = this.actionsControl;
    let strings = codes.map(c => c.code);
    actions.setValue(actions.value ? actions.value.concat(strings) : codes.map(c => c.code));
  }

  protected deleteAction(index: number) {
    let value = this.actionsControl.value || [];
    value.splice(index, 1);
    this.actionsControl.setValue(value);
  }

  private filter(val: string, values: Observable<IcpcCode[]>): Observable<IcpcCode[]> {
    return values.map(codes => {
        return codes.filter(c => `${c.code} ${c.shortTitleUa}`.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }
    );
  }

}
