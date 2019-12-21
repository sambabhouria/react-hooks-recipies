import React, { useState } from 'react'
import CallHooksOnce from './CallHooksOnce'

function CallHooksOnceContainer() {
	const [display, setDisplay] = useState(true)
	return (
		<>
		<div  className="col">
			<button className="button muted-button" onClick={() => setDisplay(!display)}>Toggle display</button>
			
		</div>
		<div  className="col">
			{display && <CallHooksOnce />}

		</div>
		</>
	)
}

export default CallHooksOnceContainer