import * as types from '../constants';
var initialValues = {
	loading: false,
};

export default function reducer(state = initialValues, actions) {
	switch (actions.type) {
		case types.SET_LOADING:
			return {
				...state,
				loading: actions.payload,
			};

		default:
			return state;
	}
}
