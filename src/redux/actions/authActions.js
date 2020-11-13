import * as types from '../constants';

export function setAuth(value) {
  return {
    type: types.SET_AUTH,
    payload: value
  }
}
