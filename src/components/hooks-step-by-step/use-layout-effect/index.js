import React from "react";
import { render } from "react-dom";
import UseLayoutEffectApp from './components/use-layout-effect-app';
import Tabs from "../tabs/Tabs";
import "../tabs/styles.css";

export default function UseLayoutEffect() {
  return (
    <div>
      <Tabs>
        <div label="Introduction">
          <span style={{ color: "red", fontWeight: 900 }}>
            {" "}
            Utiliser un Hook useLayoutEffect{" "}
          </span>{" "}
          <br />
          La signature est identique à celle de useEffect, mais useLayoutEffect
          s’exécute de manière synchrone après que toutes les mutations du DOM
          ont eu lieu.Utilisez-le pour inspecter la mise en page du DOM et
          effectuer un nouveau rendu de manière synchrone. Les mises à jour
          planifiées dans useLayoutEffect seront traitées de manière synchrone
          avant que le navigateur ait pu procéder à l’affichage.
        </div>
        <div label="Utilisation">
           <UseLayoutEffectApp />
        </div>
        <div label="Advanced">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
        <div label="Summary useLayoutEffect">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}
