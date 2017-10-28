import {IcpcCode} from './IcpcCode';

export interface HsitoryItem {
  date: string;
  name: { diagnosis: IcpcCode, episode: string };
}
