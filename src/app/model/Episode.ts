import {Visit} from './Visit';

export interface Episode {
  id: string;
  name: string;
  visits: Visit[];
}
