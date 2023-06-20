import { INCREASE, DECREASE, INCBYAMOOUNT, GETAPI } from '../types/types';

const initState = {
  count: 0
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 }
    case DECREASE:
      return { count: state.count - 1 }
    case INCBYAMOOUNT:
      return { count: state.count + action.amount }
    case GETAPI:
      return { count: action.data }
    default:
      return state;
  }
}
