import {HsitoryItem} from './HsitoryItem';

export interface Episode {
  id?: string;
  name: string;
  subVisits: number[];
  history: HsitoryItem[];
  ended?: boolean;
  endDate?: string;
}
