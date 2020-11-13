import * as types from '../constants';
var initialValues = {
	token: localStorage.getItem('token') || null,
};

export default function reducer(state = initialValues, actions) {
	switch (actions.type) {
		case types.SET_AUTH:
			return {
				...state,
				token: actions.payload,
			};

		default:
			return state;
	}
}
