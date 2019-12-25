import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
	return (
	<div className="col">
		  <h2>Share state between components => Global state management ( userReducer + useContext)</h2>
			Component C<ComponentE />
		</div>
	)
}

export default ComponentC