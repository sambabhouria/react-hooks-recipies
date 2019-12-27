 import React from 'react';
import { render } from "react-dom";
import FocusInput from './components/FocusInput'
import HookTimer from './components/HookTimer'
import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";
 

export default function UseRef() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
            <span style={{color: "red" ,fontWeight: 900}}> Utiliser un Hook useRef  </span> <br/>
               const refContainer = useRef(initialValue)<br/>
               seRef renvoie un objet ref modifiable dont la propriété current est initialisée avec l’argument fourni (initialValue).
              L’objet renvoyé persistera pendant toute la durée de vie composant. <br/>
              The useRef Hook is a function that returns a mutable ref object whose .current property is initialized  <br/>
              to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. <br/>
              There are two main uses of useRef  <br/>
                1->   <span style={{color: "red" ,fontWeight: 900}}> Accessing the DOM nodes or React elements  </span> <br/>
                2->   <span style={{color: "red" ,fontWeight: 900}}> Keeping a mutable variable </span> <br/>
        </div>
        <div label="Utilisation">
          <div className="row">
            <FocusInput />
            <HookTimer />
          </div>
        </div>
        <div label="Advanced">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
         <div label="Summary useRef">
         <span style={{color: "red" ,fontWeight: 900}}>  Summing up </span> <br/>
          The useRef Hook lets us create mutable variables inside functional components. There are three main key points that you should keep<br/>
           in mind when using the useRef Hook:<br/>

           1-> A ref created with useRef will be created only when the component has been mounted and preserved during the full lifecycle.<br/>
           2-> Refs can be used for accessing DOM nodes or React elements, and for keeping mutable variables (like instance variables in class components)<br/>
           3-> Updating a ref is a side effect so it should be done only inside an useEffect (or useLayoutEffect) or inside an event handler.
        </div>
      </Tabs>
    </div>
  );
}

 