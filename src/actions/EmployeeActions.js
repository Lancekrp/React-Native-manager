import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  firebase.firestore()
    .collection(`/users/${currentUser.uid}/employees`)
    .add({ name, phone, shift });
};
