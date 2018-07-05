import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
	render() {
		console.log(this.props);
		return;
	}
}

// mapStateToProps is to take global state object and will
// take properties off state object and provide them as props
// to component of LibraryList
const mapStateToProps = state => {
	// console.log(state);
	return { libraries: state.libraries };
};

// connect wants to get the current state from the Provider
// connect is called and returns another function
// then call that returned function with LibraryList
export default connect(mapStateToProps)(LibraryList);