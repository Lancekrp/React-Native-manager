import { EMPLOYEE_UPDATE } from '../actions/types';

const currentDay = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day =  new Date();

  return daysOfWeek[day.getDay()];
};

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: currentDay()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
};
