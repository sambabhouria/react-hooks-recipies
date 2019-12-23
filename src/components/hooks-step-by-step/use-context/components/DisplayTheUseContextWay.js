// import useContext (or we could write React.useContext)
import React, { useContext } from 'react';
import { NumberContext } from "../UseContextAppDisplay";

function DisplayTheUseContextWay() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  const value = useContext(NumberContext);
  return (
    <>
      <div className="col">
        <h2>useContext with react hooks</h2>
             The answer is {value}.
      </div>
    </>
  );
}
export default DisplayTheUseContextWay;
