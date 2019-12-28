import React, { useState, useRef, useLayoutEffect } from "react";
import { useForm } from "./use-form";
import  UseLayoutEffectHello  from "./use-layout-effect-hello";
import { useMeasure } from "./use-measure";

const UseLayoutEffectApp = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);

  const [rect, inputRef2] = useMeasure([]);

  return (
    <div className="row">
      <>
       <div className="col">
         <h2>Toggle Use Layout Hook Hello</h2>
       <button className="button muted-button" onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <UseLayoutEffectHello />}
        </div>
       <div className="col">
        <h2>input Use Layout Hook Hello</h2>
        <input
          ref={inputRef}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
     
      <button className="button muted-button"
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
       </div>
      </>
    </div>
  );
};

export default UseLayoutEffectApp;
