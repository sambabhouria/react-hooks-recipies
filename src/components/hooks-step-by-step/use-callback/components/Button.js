import React from 'react'

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button className="button muted-button" onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)