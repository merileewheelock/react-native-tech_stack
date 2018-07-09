export default (state = null, action) => {
	// console.log(action);
	// return null;
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			// if action is not type select_library
			return state;
			// will return whatever was returned the last time it ran
	}
};