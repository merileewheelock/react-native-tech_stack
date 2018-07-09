import data from './LibraryList.json';
// reducer only needs to change its data when it sees an action with a type that it cares about

// whenever this reducer runs, return list of libraries
export default () => data;