import {IcpcCode} from './IcpcCode';

export interface Visit {
  id: string;
  date: string;
  diagnoses: IcpcCode[];
  reasons: IcpcCode[];
  actions: IcpcCode[];
}
