import {Action} from '@ngrx/store';

export const SELECT_ITEM = 'SELECT_ITEM';

export function patientReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case SELECT_ITEM: {
      return (<any>action).payload;
    }
    default:
      return state;
  }
}
