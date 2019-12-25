import React, { useState}  from 'react';

     const  Callback =  () => {
     const [count, setCount] = useState(0)
     const handleClick = () => {
          window.alert('CLICKED');
         setCount(count + 1)
          
      }
 
   return (
      	 <div className="col">
     <h3> Callback {count}</h3>
          <button className="button muted-button"  onClick={handleClick}>Click Me</button>
      </div>
    );
   
}

export default Callback