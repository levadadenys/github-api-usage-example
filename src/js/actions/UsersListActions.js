import * as types from './actionTypes';

export function setUsers (data) {
  return {
    type: types.SET_USERS,
    data: data
  };
}