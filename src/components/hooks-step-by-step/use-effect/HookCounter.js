import React, { useState, useEffect } from 'react'
import { useFetch } from "./useFetch";
function HookCounter() {

    const [count, setCount] = useState(0)
    //just to show that we can call useState with fucntion
	const [countData, setCountData] = useState(() =>
    JSON.parse(localStorage.getItem("countData"))
  );
	

	useEffect(() => {
		console.log('useEffect - Updating document title ')
	  localStorage.setItem("countData", JSON.stringify(countData));
	}, [count,countData])

	 const { data, loading } = useFetch(`http://numbersapi.com/${countData}/trivia`);
	return (
		<>
		<div className="col">
		  <h2>Conditional run effect</h2>
		    <div>{!data ? "loading..." : data}</div>
			 <button className="button muted-button" onClick={() => setCountData(c => c + 1)}>increment</button>
			<button className="button muted-button" onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
        <div className="col">
		 <h2>Result conditional run effect</h2>
		  <div>countData: {countData}</div>
          `You clicked ${count} times`
       </div>
	</>
	)
}

export default HookCounter;