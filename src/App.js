import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
// Prodiver is a React component that aids in communication between React and Redux
import { createStore } from 'redux';
import reducers from './reducers'; // will automatically import index.js
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () =>{
	return (
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
		</Provider>
	)
}

export default App;