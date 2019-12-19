 import React from 'react';
import { render } from "react-dom";

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
              L’objet renvoyé persistera pendant toute la durée de vie composant.
        </div>
        <div label="Utilisation">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Advanced">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
         <div label="Summary useRef">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}

 