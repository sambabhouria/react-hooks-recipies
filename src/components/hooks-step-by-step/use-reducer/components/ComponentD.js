import React, {useContext} from 'react'
import { CountContext } from '../index';

function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component D {countContext.countState}
            <button className="button muted-button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button className="button muted-button" onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button className="button muted-button" onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentD