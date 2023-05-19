import {INCREASE,DECREASE,INCBYAMOOUNT,GETAPI} from '../types/types';

const initState = {
  count: 0
};

const reducer = (state=initState,action)=>{
  console.log(action.type);
  switch (action.type) {
    case INCREASE:
      return {count:state.count+1}
    case DECREASE:
      return {count:state.count-1}
    case INCBYAMOOUNT:
    return {count: state.count+ action.amount}
    case GETAPI:
    return {count: action.data}
    default:
    return state;
  }
}
export default reducer;
