import * as types from '../constants';

export function setLoading(value) {
  return {
    type: types.SET_LOADING,
    payload: value
  }
}
