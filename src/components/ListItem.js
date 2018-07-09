import React, { Component } from 'react';
import {
	Text, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import  * as actions from '../actions';

class ListItem extends Component {	
	componentWillUpdate() {
		// called whenever the component is about to be rerendered to the device
		LayoutAnimation.spring();
	}

	renderDescription() {
		// const { library, selectedLibraryId } = this.props;
		const { library, expanded } = this.props;

		const { expandedStyle } = styles;

		// if (library.id === selectedLibraryId){
		if (expanded){
			return(
				<CardSection>
					<Text style={expandedStyle}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { titleStyle } = styles;
		// console.log(this.props);
		const { id, title } = this.props.library;

		return(
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
	expandedStyle: {
		paddingLeft:15,
		paddingRight: 15,
		flex: 1
	}
}

// mapStateToProps comes with component's props, so ownProps is this.props
// refactored to move expanded logic down here
// mapStateToProps runs when state changes and causes component to rerender
const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id; // (true or false)
	// return { selectedLibraryId: state.selectedLibraryId };
	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
// First argument in connect() is mapStateToProps. If you don't want to mapStateToProps, enter null
// When we use the connect helper, it is modifying what data is sent to the ListItem as props