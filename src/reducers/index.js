// reducers produce application's state; state holds data for app
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
	libraries: LibraryReducer
});


// console.log(store.getState());
// would return:
// { libraries: [ { id: 1, title: ...} ] }