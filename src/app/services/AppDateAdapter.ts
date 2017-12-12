import {NativeDateAdapter} from '@angular/material';

export class AppDateAdapter extends NativeDateAdapter {
  public getFirstDayOfWeek(): number {
    return 1;
  }
}
