import {Action} from '@ngrx/store';

export const ADD_ITEMS = 'ADD_ITEMS';
export const CREATE_EPISODE = 'CREATE_EPISODE';

export function patientsReducer(state: any = [], action: Action) {
  switch (action.type) {
    case ADD_ITEMS: {
      return action.payload;
    }

    case CREATE_EPISODE:
      return [...state, action.payload];

    default:
      return state;
  }
}
