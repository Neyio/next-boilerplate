import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
const sagaMiddleware = createSagaMiddleware()
import config from '../config'
import rootReducer, { initialState } from '../reducers'
const logger = createLogger({})
const bindMiddleware = middleware => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(...middleware))
	}
	return applyMiddleware(...middleware)
}

export const initStore = (initStore = {}, context) => {
	return createStore(
		rootReducer,
		initialState,
		process.env.NODE_ENV !== 'production' && typeof window !== 'undefined'
			? bindMiddleware([sagaMiddleware, thunkMiddleware, logger])
			: bindMiddleware([sagaMiddleware, thunkMiddleware])
	)
}
