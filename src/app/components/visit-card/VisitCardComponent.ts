import {Component, Input} from '@angular/core';
import {Episode} from '../../model/Episode';
import {SubVisit} from '../../model/SubVisit';

@Component({
  selector: 'icpc-visit-card',
  templateUrl: 'visit-card.component.html'
})
export class VisitCardComponent {
  @Input()
  public visit: { date: string, values: SubVisit[] };
  @Input()
  public episode: Episode;
}
