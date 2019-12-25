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

const  CounterOne = () =>  {
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
          <div className="col">
            <h2>Use Reducer With Simple State: number => Local state management</h2>
            <div>Count = {count}</div>
             <button  className="button muted-button" onClick={() => dispatch('increment')}>Increment</button>
             <button className="button muted-button" onClick={() => dispatch('decrement')}>Decrement</button>
			 <button className="button muted-button" onClick={() => dispatch('reset')}>Reset</button>
		</div>
	)
}

export default CounterOne