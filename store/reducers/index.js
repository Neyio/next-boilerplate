// REDUCERS
import {actionTypes} from '../actions'
import {InitialState} from '../index.js'
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
      case actionTypes.TICK:
        return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light })
      case actionTypes.ADD:
        return Object.assign({}, state, {
          count: state.count + 1
        })
      default: return state
    }
  }