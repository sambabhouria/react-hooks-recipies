import React from "react";
import Display from "./components/Display";
import DisplayTheUseContextWay from "./components/DisplayTheUseContextWay";

// Create a Context
export const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function UseContextAppDisplay() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <div className="row">
      <NumberContext.Provider value={42}>
          <div className="col">
          <Display />
        </div>
          <div className="col">
          <DisplayTheUseContextWay />
        </div>

      </NumberContext.Provider>
    </div>
  );
}

export default UseContextAppDisplay;
