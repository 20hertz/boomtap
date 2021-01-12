import { Action, State } from './types';

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_SAMPLES':
      return action.payload;
    default:
      return state;
  }
};
