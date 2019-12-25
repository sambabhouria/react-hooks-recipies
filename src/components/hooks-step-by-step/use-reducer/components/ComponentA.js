import React, {useContext} from 'react'
import { CountContext } from '../index';

const  ComponentA= () => {
  const countContext = useContext(CountContext)
  return (
  
      <div  className="col">
        <h2>Share state between components => Global state management ( userReducer + useContext)</h2>
        userReducer with useContext:  Component A {countContext.countState}
        <button className="button muted-button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button className="button muted-button" onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button className="button muted-button" onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA