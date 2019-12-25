 import React from 'react';
import { render } from "react-dom";
import ParentComponent from "./components/ParentComponent"
import Callback from "./components/Callback"
import CallbackHook from "./components/CallbackHook"

import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";
 

export default function UseCallBack() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
            <span style={{color: "red" ,fontWeight: 900}}> Utiliser un Hook useCallback </span> <br/>
            This Hooks prevent unnecessary re-renders, making your code way more efficient.<br/>
            if you pass ‘useCallback’ as a prop with a dependency array, the function will be executed only
            when the dependency changes.<br/>
            
        </div>
        <div label="Utilisation">
           <div className="row"> 
                < ParentComponent />
           </div>
        </div>
        <div label="Advanced">
           <div className="row"> 
                  <CallbackHook />
                  <Callback />
           </div>
        </div>
         <div label="Summary useCallback">
            <span style={{color: "red" ,fontWeight: 900}}> What is useCallback  Hook </span> <br/>   
                useCallback is a hook that will return a memorized version of the callback function that only changes
                if one of the dependencies has changed. <br/> 
             <span style={{color: "red" ,fontWeight: 900}}> Why useCallback  Hook </span> <br/>  
               it is useful when passsing callbacks to optimized child component that rely on reference equality to 
               prevent unnecessary renders. <br/>  
               <span style={{color: "red" ,fontWeight: 900}}> How </span> <br/>
               1-> import it from react <br/>
               2-> call reseCall with accept callback function for first parametter and second parameter as dependency listss<br/>
                <span style={{color: "red" ,fontWeight: 900}}>  useEffect() vs  useCallback() </span> <br/>  

                 <span style={{color: "red" ,fontWeight: 900}}>  1   useEffect() </span> <br/> 
                 useEffect() is a React Hook which allows you to handle side effects in your functional React components.<br/>
                 You can use it to do anything that doesn’t directly impact your UI/ JSX code (it might eventually impact it,<br/>
                 for example, if you’re fetching data from some server, but for the current render cycle, it will not).<br/>
                 useEffect() allows you to register a function which executes AFTER the current render cycle.<br/> 
                 useEffect() runs after every render cycle (i.e. whenever your functional component re-runs/ re-renders),<br/>
                 unless you pass a second argument to an array of dependencies of the effect.<br/>
                 With such a dependency array provided, useEffect() will only re-run the function you passed as a first argument, whenever one of the dependencies changed.<br/>
                <span style={{color: "red" ,fontWeight: 900}}> 2  useCallback() </span> <br/> 
                 useCallback() often is used in conjunction with useEffect()because it allows you to prevent the re-creation of a function. For this,<br/>
                 it's important to understand that functions are just objects in JavaScript.<br/>
                 Therefore, if you have a function (A) inside of a function (B), the inner function (=A) will be recreated <br/>
                  (i.e. a brand-new object is created) whenever the outer function (B) runs.<br/>
                  That means that in a functional component, any function you define inside of it is re-created whenever the<br/>
                   component rebuilds
        </div>
      </Tabs>
    </div>
  );
}

 