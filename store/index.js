import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import {reducer}  from './reducers'

export const InitialState = {
	lastUpdate: 0,
	light: false,
	count: 0
}

export const initStore = (initialState = InitialState) => {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	)
}
