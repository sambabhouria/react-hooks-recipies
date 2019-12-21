 import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import HookCounter from './HookCounter'
import CallHooksOnceContainer from './CallHooksOnceContainer'
import DataFetchingById from './DataFetchingById'

const UseEffectApp = () => {

   const [showHello, setShowHello] = useState(false);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Show hide Hello Component: </h2>
          <hr />
            <button className="button muted-button" onClick={() => setShowHello(!showHello)}>toggle</button>
          
        </div>
        <div className="col">
          <h2>Result of Show Hide Hello: </h2>
          <hr />
              {showHello && <Hello />}
        </div>
      </div>
      <div className="row">
            <HookCounter />
      </div>
      <br />
       <div className="row">
            {/* <CallHooksOnce /> */}
            <CallHooksOnceContainer />
            
            
      </div>
       <div className="row">
            <DataFetchingById />
            
      </div>
    </div>
  );
};

export default UseEffectApp;