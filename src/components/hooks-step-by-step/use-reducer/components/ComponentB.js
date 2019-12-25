import React from 'react'
import ComponentD from './ComponentD'

function ComponentB() {
	return (
		<div className="col">
		  <h2>Share state between components => Global state management ( userReducer + useContext)</h2>
			Component B<ComponentD />
		</div>
	)
}

export default ComponentB