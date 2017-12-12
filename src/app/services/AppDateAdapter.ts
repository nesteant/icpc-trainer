import {NativeDateAdapter} from '@angular/material';

export class AppDateAdapter extends NativeDateAdapter {
  public getFirstDayOfWeek(): number {
    return 1;
  }


    format(date: Date, displayFormat: Object): string {
    console.log(super.format(date, displayFormat));
        return super.format(date, displayFormat);
    }

    toIso8601(date: Date): string {
        console.log(super.toIso8601(date));
        return super.toIso8601(date);
    }
}
