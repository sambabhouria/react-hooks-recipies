import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	return (
			<div className="col">
			<h2> React useRef Hook Focus input </h2>
				<input ref={inputRef} type="text" />
			</div>
	)
}

export default FocusInput