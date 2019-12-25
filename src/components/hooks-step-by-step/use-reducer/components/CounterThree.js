import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

const  CounterThree= () => {
	const [count, dispatch] = useReducer(reducer, initialState)
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

	return (
		<div>
		   <h2>Local state management for mutiple value : using multiple useReducer</h2>
			<div>Mutiple variable with the same state transition : Count = {count}</div>
			<button className="button muted-button" onClick={() => dispatch('increment')}>Increment</button>
			<button className="button muted-button" onClick={() => dispatch('decrement')}>Decrement</button>
			<button className="button muted-button" onClick={() => dispatch('reset')}>Reset</button>

			<div>Count = {countTwo}</div>
			<button className="button muted-button" onClick={() => dispatchTwo('increment')}>Increment</button>
			<button className="button muted-button" onClick={() => dispatchTwo('decrement')}>Decrement</button>
			<button className="button muted-button" onClick={() => dispatchTwo('reset')}>Reset</button>
		</div>
	)
}

export default CounterThree