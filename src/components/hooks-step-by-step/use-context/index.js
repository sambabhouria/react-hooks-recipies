 import React from 'react';
import { render } from "react-dom";

import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";
 

export default function UseContext() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
            <span style={{color: "red" ,fontWeight: 900}}> Utiliser un Hook useContext </span> <br/>
           
        </div>
        <div label="Utilisation">
           Use go out here
        </div>
        <div label="Advanced">
          !!!!!!!!!!!!
        </div>
         <div label="Summary useContext">
          !!!!!!!!!!!!
        </div>
      </Tabs>
    </div>
  );
}

 