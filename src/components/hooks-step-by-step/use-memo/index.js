 import React from 'react';
import { render } from "react-dom";

import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";
 

export default function UseMomo() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
            <span style={{color: "red" ,fontWeight: 900}}> Utiliser un Hook useMemo </span> <br/>
            
        </div>
        <div label="Utilisation">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Advanced">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
         <div label="Summary useMemo">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}

 