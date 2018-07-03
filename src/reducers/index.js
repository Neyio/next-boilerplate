import { combineReducers } from 'redux'

import count from './counter'

export const initialState = {
	count: 0
}
export default combineReducers({
  count
})
