 import React from 'react';
import { render } from "react-dom";
import MemoHook from  "./components" 
import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";
 

export default function UseMomo() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
            <span style={{color: "red" ,fontWeight: 900}}> Utiliser un Hook useMemo </span> <br/>
             Two similar hooks - useCallback and useMemo <br/>
             React introduces another similar hook called useMemo. It has similar signature, but works differently.<br/>
             Unlike useCallback, which caches the provided function instance, useMemo invokes the provided function and caches 
             its result.<br/>
             In other words useMemo caches a computed value. This is usefull when the computation requires significant resources and we don’t want<br/>
             to repeat it on every re-render, as in this example:<br/>
              const [c, setC] = useState(0);<br/>
              // This value will not be recomputed between re-renders<br/>
              // unless the value of c changes<br/>
              const sinOfC: number = useMemo(() => Math.sin(c) , [c])<br/>
              Just as with useCallback, the values returned by useMemo can be used as other hooks’ dependencies.<br/>
              As an interesting aside, useMemo can cache a function value too. In other words, it is a generalised version of useCallback and<br/>
               can replace it as in the following example<br/>
               
            
        </div>
        <div label="Utilisation">
              <MemoHook />
        </div>
        <div label="Advanced">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
         <div label="Summary useMemo">
           <span style={{color: "red" ,fontWeight: 900}}> This hook is used to create a memoized value. </span> <br/>
           This hook is very similar to useCallback, the difference is that useCallback returns a memoized callback and <br/>
            useMemo returns a memoized value, the result of that function call. The use case is different, too.<br/>
             useCallback is used for callbacks passed to child components.<br/>
             Sometimes you have to compute a value, either through a complex <br/>
             calculation or by reaching to the database to make a costly query or to the network.<br/>
             Using this hook, this operation is done only once, then the value will be stored in the memoized value <br/>
              and the next time you want to reference it, you’ll get it much faster.<br/>
              Here’s how to use it:<br/>
              const memoizedValue = useMemo(() => expensiveOperation())<br/>
              Make sure you add that empty array as a second parameter to useMemo(), otherwise no memoization will happen at all.<br/>
              If you need to pass arguments, you also need to pass them in the array:<br/>
              const memoizedValue = useMemo(() => expensiveOperation(param1, param2), [param1, param2])<br/>

              <span style={{color: "red" ,fontWeight: 900}}>  If one of the parameters change when you try to access the value, the value of course will be calculated without memoization </span> <br/>
        </div>
      </Tabs>
    </div>
  );
}

 