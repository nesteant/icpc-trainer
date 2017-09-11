import {Diagnosis} from './Diagnosis';

export interface Episode {
  id: string;
  name: string;
  diagnoses: Diagnosis[];
}
