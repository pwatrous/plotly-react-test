import { TOGGLE_GRAPH } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_GRAPH:
      return { ...state, selectedData: action.selectedData };
    default:
      return state;
  }
};

