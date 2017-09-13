import {Component, Input} from '@angular/core';
import {SubVisit} from '../../model/SubVisit';

@Component({
  selector: 'icpc-subvisit-card',
  templateUrl: 'subvisit-card.component.html'
})
export class SubVisitCardComponent {

  @Input()
  public subVisit: SubVisit;
}
