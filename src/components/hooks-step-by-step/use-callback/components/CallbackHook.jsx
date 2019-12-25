import React, { useState, useCallback } from 'react'

const CallbackHook = () => {
      const [count, setCount] = useState(0)
      const handleClick = useCallback(() => {
         setCount(count + 1)
            window.alert('CLICKED IN HOOK CALL BACK ');
            
     }, [ ])

  return (
    	 <div className="col">
             <h2> Callback Hook to improve performance {count}</h2>
         <button className="button muted-button" onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default CallbackHook