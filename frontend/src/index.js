import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './configureStore';
import history from './history';
import './global-styles';

const initialState ={};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>,
		MOUNT_NODE,
	);
};

render();




