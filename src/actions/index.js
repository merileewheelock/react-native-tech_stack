export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};

// this function is called an action creator
// when we call this action creator, the returned action is sent to all the reducers

// when action creator is called, we must provide a libraryId,
// and that will be attached to the action as the payload

// an action creator is a plain JS function that returns a plain JS object