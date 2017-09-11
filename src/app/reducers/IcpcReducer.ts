import {Action} from '@ngrx/store';

export const LOAD_ITEMS = 'LOAD_ITEMS';

export function icpcReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case LOAD_ITEMS: {
      return action.payload;
    }
    default:
      return state;
  }
}
