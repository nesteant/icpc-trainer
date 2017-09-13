import {Episode} from './Episode';
import {SubVisit} from './SubVisit';

export interface Patient {
  id: string;
  episodes: Episode[];
  subVisits: SubVisit[];
}
