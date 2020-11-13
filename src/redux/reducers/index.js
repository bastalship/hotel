import { combineReducers } from 'redux';
import loadingReducers from './loadingReducers';
import authReducers from './authReducers';


export default combineReducers({
	loadingReducers,
	authReducers
});
