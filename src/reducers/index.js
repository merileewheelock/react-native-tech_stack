// reducers produce application's state; state holds data for app
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});


// console.log(store.getState());
// would return:
// { libraries: [ { id: 1, title: ...} ] }