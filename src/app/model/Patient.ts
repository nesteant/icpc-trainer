import {Episode} from './Episode';
import {Visit} from './Visit';

export interface Patient {
  id: string;
  episodes: Episode[];
  visits: Visit[];
}
