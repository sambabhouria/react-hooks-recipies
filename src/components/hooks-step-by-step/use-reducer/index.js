import React, { useReducer } from 'react'

import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'

//using useContext with useReducer
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

// fetching data using axions manage data ussing useSate, useEffect 
import DataFetchingOne from './DataFetchingOne'
// fetching data using axions manage data using useReducer, useEffect 
import DataFetchingTwo from './DataFetchingTwo'

import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";

// creating oontext 
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
            <div className="row"> 
                <DataFetchingOne />
                 <DataFetchingTwo />
            </div>
        </div>
         <div label="Summary useReducer">
            <span style={{color: "red" ,fontWeight: 900}}> useReducer Summary </span> <br/>
             useReducer is a hook that is used for state management in React <br/>
             useReducer is related to reducer functions<br/>
             userReducer(reducer,initialState)<br/>
             reducer(currentState,action)<br/>
             <span style={{color: "red" ,fontWeight: 900}}> When should we use useState vs useReducer </span> <br/>
              1-> useState : when dealing with  Number, String, Boolean <br/>
              1-> useReducer : when dealing Object or Array <br/>

               2-> useState : when dealing with one or two variable <br/>
               2-> useReducer : when dealing Too many variable  <br/>
               3-> useState : when not  dealing with Related state transition <br/>
               3-> useReducer : when  dealing with Related state transition  <br/>
               4-> useState : No business logic <br/>
               4-> useReducer : Complex business logic  <br/>
               5-> useState : Local  state variable <br/>
               5-> useReducer : Global state variable  in deep component tree <br/>


        </div>
      </Tabs>
    </div>
  );
}

 