import {Action} from '@ngrx/store';

export const ADD_ITEMS = 'ADD_ITEMS';

export function patientsReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case ADD_ITEMS: {
      return action.payload;
    }

    default:
      return state;
  }
}
