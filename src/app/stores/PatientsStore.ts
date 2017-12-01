import {IcpcCode} from '../model/IcpcCode';
import {Patient} from '../model/Patient';

export interface PatientsStore {
  icpc: IcpcCode[];
  patients: Patient[];
  patient: Patient;
}
