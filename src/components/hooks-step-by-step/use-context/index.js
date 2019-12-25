import React from "react";
import ThemeContext from "./ThemeContext";
import UseContextApp from "./UseContextApp";
import UseContextAppDisplay from "./UseContextAppDisplay";
import UseContextThemeApp from "./UseContextThemeApp";
import UserContextExemple from "./UserContextExemple";
import UseContextAppAdvanced from "./UseContextAppAdvanced";
 
import Context from './components/Context';
import ContextHook from './components/ContextHook';

import Tabs from "../tabs/Tabs";
import "../tabs/styles.css";

export default function UseContext() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
          <span style={{ color: "red", fontWeight: 900 }}>
            {" "}
            Utiliser un Hook useContext === >useContext ->context API{" "} 
          </span>{" "}
          <br />
          React Context is a powerful feature. If your React application grows
          in size beyond a small application. Especially if your component
          hierarchy grows in vertical size, <br /> it becomes tedious passing
          props several React components down -- from a parent component to a
          deeply nested child component. <br /> Most often all the React
          components in between are not interested in these props and just pass
          the props to the next child component until it reaches the desired
          child component. React Context solve this probleme. <br />
          <span style={{ color: "red", fontWeight: 900 }}>
            {" "}
            REACT CONTEXT: HOW{" "}
          </span>{" "}
          <br />
          First, you have to create the React Context itself which gives you
          access to a Provider and Consumer component.
          <br />
          When you create the context with React by using createContext, you can
          pass it an initial value. The initial value can be null too. <br />
          <span style={{ color: "red", fontWeight: 900 }}>
            {" "}
            REACT CONTEXT: WHEN{" "}
          </span>{" "}
          <br />
          When should you use React Context? Generally speaking there are two
          use cases when to use it: <br />
          1-->When your React component hierarchy grows vertically in size and
          you want to be able to pass props to child components without
          bothering <br />
          components in between. We have used this use case as example
          throughout this whole React Context tutorial
          <br />
          2--> When you want to have advanced state management in React with
          React Hooks for passing state and state updater functions via React
          <br />
          Context through your React application. Doing it via React Context
          allows you to create a shared and global state. <br />
        </div>
        <div label="Utilisation">
          <ThemeContext.Provider value="green">
            <UseContextApp />
          </ThemeContext.Provider>
            <Context />
            <ContextHook />
          
        </div>
        <div label="Advanced">
          <UseContextAppDisplay />

          <UseContextThemeApp />

          < UseContextAppAdvanced />
        </div>
        <div label="Summary useContext">
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level <br />
          There are 3 important pieces to the context API:<br />
          1-> The React.createContext function which creates the context<br />
          2-> The Provider (returned by createContext) which establishes the “electrical bus” running through a component tree<br />
          3-> The Consumer (also returned by createContext) which taps into the “electrical bus” to extract the data <br />
          The Provider is very similar to React-Redux’s Provider. It accepts a value prop which can be whatever you want 
          (it could even be a Redux store… but that’d be silly). It’ll most likely be an object containing your data
           and any actions you want to be able to perform on the data.<br />
           The Consumer works a little bit like React-Redux’s connect function, tapping into the data and making it available to the component that uses it.
        </div>
      </Tabs>
    </div>
  );
}
