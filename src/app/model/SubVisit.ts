import {IcpcCode} from './IcpcCode';

export interface SubVisit {
  id: number;
  date: string;
  diagnosis: IcpcCode;
  reasons: IcpcCode[];
  actions: IcpcCode[];
}
