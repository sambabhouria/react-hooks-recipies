import React, { useReducer } from 'react'

import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'

//using useContext with useReducer
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";

 export const CountContext = React.createContext()

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

export default function UseReducerApp() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <Tabs>
        <div label="Introduction">
            <span style={{color: "red" ,fontWeight: 900}}> Utiliser un Hook useReducer ======> useReducer-> reducers </span> <br/>
             useReducer is a hook that is used for  state management <br/>
              What's the difference ?<br/>
              UseStae is built using useReducer<br/>
            
        </div>
        <div   label="Utilisation">
           
            <div className="row">  
              < CounterOne />
              < CounterTwo />
           </div>

             <div className="row">  
              < CounterThree />
           </div>
          
        </div>
        <div label="Advanced">
            <CountContext.Provider
		           	value={{ countState: count, countDispatch: dispatch }}
	          >
            <div className="row"> 
                <ComponentA />
           </div>
            <div className="row">  
              < ComponentB />  
              < ComponentC />           
           </div>
            </CountContext.Provider>
        </div>
         <div label="Summary useReducer">
            <span style={{color: "red" ,fontWeight: 900}}> useReducer Summary </span> <br/>
             useReducer is a hook that is used for state management in React <br/>
             useReducer is related to reducer functions<br/>
             userReducer(reducer,initialState)<br/>
             reducer(currentState,action)<br/>
        </div>
      </Tabs>
    </div>
  );
}

 