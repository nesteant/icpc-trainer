import {IcpcCode} from './IcpcCode';

export interface Visit {
  id: string;
  date: string;
  diagnosis: IcpcCode;
  reasons: IcpcCode[];
  actions: IcpcCode[];
}
