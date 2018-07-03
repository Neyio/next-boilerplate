import * as ActionType from '../actions/counter'

import { initialState } from './index'

export default function(state = initialState, action) {
	switch (action.type) {
		case ActionType.ADD:
			return state + 1
		default:
			return state
	}
}
