 import React from 'react';
import { render } from "react-dom";

import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";
 

export default function UseReducer() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
            <span style={{color: "red" ,fontWeight: 900}}> Utiliser un Hook useReducer </span> <br/>
            
        </div>
        <div label="Utilisation">
           Use go out here
        </div>
        <div label="Advanced">
            !!!!!!!!!!
        </div>
         <div label="Summary useReducer">
            !!!!!!!!!!
        </div>
      </Tabs>
    </div>
  );
}

 