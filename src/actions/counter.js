export const ADD = Symbol('ADD')
// Symbol('ADD')

export const addCount = () => dispatch => {
	return dispatch({ type: ADD })
}
