import {SubVisit} from './SubVisit';

export interface Visit {
  id: string;
  subVisits: SubVisit[];
}
