import {Visit} from './Visit';
import {HsitoryItem} from './HsitoryItem';

export interface Episode {
  id: string;
  name: string;
  visits: Visit[];
  history: HsitoryItem[];
}
