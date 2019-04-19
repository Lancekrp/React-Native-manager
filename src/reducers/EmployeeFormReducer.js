import { EMPLOYEE_UPDATE } from '../actions/types';
import CurrentDay from '../components/CurrentDay';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: CurrentDay()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
};
