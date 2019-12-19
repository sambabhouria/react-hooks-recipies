 import React from 'react';
import { render } from "react-dom";
import UseStateApp from './UseStateApp';
import AdvancedUseStateApp from './UseStateAdvanced';

import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";
 

export default function UseStateEntryPoint() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
          <span style={{color: "red" ,fontWeight: 900}}> Appeler useState, qu’est-ce que ça fait ? </span> <br/>
          Ça déclare une « variable d’état » . C’est un moyen de « préserver » des valeurs entre différents appels de fonctions.<br/>
          useState est une nouvelle façon d’utiliser exactement les mêmes possibilités qu’offre this.state dans une classe.<br/>
           Normalement, les variables « disparaissent » quand la fonction s’achève mais les variables d’état sont préservées par React.<br/>
             <span style={{color: "red" ,fontWeight: 900}}> Qu’est-ce qu’on passe à useState comme argument ? </span> <br/>
             Le seul argument à passer au Hook useState() est l’état initial.Contrairement à ce qui se passe dans les classes,
             l’état local n’est pas obligatoirement un objet. Il peut s’agir d’un nombre ou d’une chaîne de caractères si ça nous suffit. <br/>
           <span style={{color: "red" ,fontWeight: 900}}> Que renvoie useState ? </span> <br/>
           Elle renvoie une paire de valeurs : l’état actuel et une fonction pour le modifier. C’est semblable à this.state.count et this.setState dans une classe<br/>
           <span style={{color: "red" ,fontWeight: 900}}> Astuce : utiliser plusieurs variables d’état </span> <br/>
            
            const [age, setAge] = useState(42); <br/>
            const [fruit, setFruit] = useState('banane'); <br/>
            
        
        </div>
        <div label="Utilisation">
             <UseStateApp />
        </div>
        <div label="Advanced">
           <AdvancedUseStateApp />
        </div>
         <div label="Summary-useState">
            1-> The useState hook lets you add state to functional components <br/>
            2-> In classes, the state is always an object <br/>
            3-> With the useState hook, the state doesn't have to be an object <br/>
            4-> The useState hook returns an array with 2 elements <br/>
            5-> The first element is the current value of the state, and the second element is a setter function <br/>
            6-> The state value depends on the previous state value? You can pass a functin to the setter function  <br/>
            7-> When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function  <br/>
        </div>
      </Tabs>
    </div>
  );
}

 