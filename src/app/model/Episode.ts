import {HsitoryItem} from './HsitoryItem';
import {IcpcCode} from './IcpcCode';

export interface Episode {
  id?: string;
  name: { diagnosis: IcpcCode, episode: string };
  subVisits: number[];
  history: HsitoryItem[];
  ended?: boolean;
  endDate?: string;
  comments?: string;
}
