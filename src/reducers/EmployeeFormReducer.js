import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';
import CurrentDay from '../components/CurrentDay';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: CurrentDay()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
