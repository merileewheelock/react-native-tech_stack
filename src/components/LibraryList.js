import React, { Component } from 'react';
import { FlatList } from 'react-native'; // will only render a subset of items at any time
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	renderItem(library) {
		// console.log(library)
		return <ListItem library={library.item} />
	}

	render() {
		return (
			<FlatList
				data={this.props.libraries}
				renderItem={this.renderItem}
				keyExtractor={library => library.id}
			/>
		)
	}
}

// mapStateToProps is to take global state object and will take properties off state object
// and provide them as props to component of LibraryList
const mapStateToProps = state => {
	// console.log(state);
	return { libraries: state.libraries };
};

// connect wants to get the current state from the Provider
// connect is called and returns another function then call that returned function with LibraryList
export default connect(mapStateToProps)(LibraryList);