import {Diagnosis} from './Diagnosis';

export interface Visit {
  id: string;
  name: string;
  diagnoses: Diagnosis[];
}
