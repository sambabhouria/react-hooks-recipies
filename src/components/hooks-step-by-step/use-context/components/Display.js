import React from "react";

import { NumberContext } from "../UseContextAppDisplay";

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <>
      <div>
        <h2>Using context before react hooks</h2>
        <NumberContext.Consumer>
          {value => <div>The answer is {value}.</div>}
        </NumberContext.Consumer>
      </div>
    </>
  );
}
export default Display;
