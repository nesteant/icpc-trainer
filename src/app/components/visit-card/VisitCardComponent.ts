import {Component, Input} from '@angular/core';
import {Episode} from '../../model/Episode';
import {SubVisit} from '../../model/SubVisit';
import {VisitDetailsDialogComponent} from '../../dialogs/visit-details-dialog/VisitDetailsDialogComponent';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'icpc-visit-card',
  templateUrl: 'visit-card.component.html'
})
export class VisitCardComponent {
  @Input()
  public visit: { date: string, values: SubVisit[] };
  @Input()
  public episodes: Episode[];

  constructor(public dialog: MatDialog) {
  }

  public openVisitDetailsModal(visit: SubVisit) {
    let dialogRef = this.dialog.open(VisitDetailsDialogComponent, {
      height: '600px',
      width: '700px',
      data: {
        episode: this.findEpisode(visit),
        visit: visit
      }
    });
  }

  private findEpisode(entry: SubVisit) {
    return this.episodes.find(ep => ep.subVisits.indexOf(entry.id) > -1);
  }
}
