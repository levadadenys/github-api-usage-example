import * as types from './../actions/actionTypes';

const STORE = [];

export default function (state = [...STORE], action = {}) {
  const {type, data} = action;

  switch (type) {
    case types.SET_USERS: {
      return [...data];
    }

    default:
      return state;
  }
}
