import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

import myMechinaMiddleware from './myMiddleware.js'

const logger = createLogger({
	diff: true,
	collapsed: true
})

import promiseMiddleware from 'redux-promise-middleware'


import rootReducer from '../reducers/index.js'

let store = createStore(
	rootReducer,
	applyMiddleware(
		myMechinaMiddleware,
		promiseMiddleware(),
		logger
	),
)

if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers/index.js');
		store.replaceReducer(nextRootReducer);
	});
}

export default store
