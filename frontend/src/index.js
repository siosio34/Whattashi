import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/App';

import './global-styles';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import configureStore from './configureStore';

export const store = configureStore();
store.runSaga(rootSaga);

const MOUNT_NODE = document.getElementById('root');

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		MOUNT_NODE,
	);	
};

render();




