 import React from 'react';
import { render } from "react-dom";
import UseEffectApp from './UseEffectApp';
import DataFetching from './DataFetching';

import Tabs from '../tabs/Tabs';
import "../tabs/styles.css";
 

export default function UseEffectEntryPoint() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
            <span style={{color: "red" ,fontWeight: 900}}> Utiliser un Hook d’effet </span> <br/>
            Le Hook d’effet permet l’exécution d’effets de bord dans les fonctions composants : <br/>
             Similaire à componentDidMount et componentDidUpdate : <br/>
             Charger des données depuis un serveur distant, s’abonner à quelque chose et modifier manuellement le DOM 
             sont autant d’exemples d’effets de bord.
             Si vous avez l’habitude des méthodes de cycle de vie des classes React, pensez au Hook useEffect comme à une combinaison de componentDidMount, componentDidUpdate, et componentWillUnmount.
             Il existe deux grands types d’effets de bord dans les composants React : ceux qui ne nécessitent pas de nettoyage, et ceux qui en ont besoin.
              Examinons cette distinction en détail.<br/>
              <span style={{color: "red" ,fontWeight: 900}}>Que fait useEffect ?</span> On utilise ce Hook pour indiquer à React que notre composant doit 
              exécuter quelque chose après chaque affichage. <br />
              <span style={{color: "red" ,fontWeight: 900}}> Pourquoi useEffect est-elle invoquée à l’intérieur d’un composant ?</span>
              Le fait d’appeler useEffect à l’intérieur de notre composant nous permet d’accéder à la variable d’état elle est déjà dans 
              la portée de la fonction.<br />
               <span style={{color: "red" ,fontWeight: 900}}>  Est-ce que useEffect est appelée après chaque affichage ? </span>
               Oui ! Elle est exécutée par défaut après le premier affichage et après chaque mise à jour
        </div>
        <div label="Utilisation">
           <UseEffectApp />
        </div>
        <div label="Advanced">
           <DataFetching />
        </div>

         <div label="Summary useEffect">
            1->The Effect Hook lets you perform <span style={{fontWeight:'bold', color:'red'}}>side effects</span> in <span style={{fontWeight:'bold', color:'red'}}>
             functional components</span><br/>
            2-> It is a close replacement for<span style={{fontWeight:'bold', color:'red'}}> componentDidMount componentDidUpdate</span>
            and <span style={{fontWeight:'bold', color:'red'}}> componentWillUnmount</span> <br/>   
            3-><span style={{fontWeight:'bold', color:'red'}}> useEffect run after evry render</span><br/> 
            4-><span style={{fontWeight:'bold', color:'red'}}> useEffect is call in the component to acces the props and state
            whitout writting any other code</span>
        
        </div>
      </Tabs>
    </div>
  );
}

 