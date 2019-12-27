import React from 'react';
import { openLink } from './utils.js';
import Introduction from './Introduction'
import  UseStateEntryPoint  from "./use-state";
import UseEffectEntryPoint  from "./use-effect";
import UseLayoutEffect  from "./use-layout-effect";
import UseRef  from "./use-ref";
import UseCallBack  from "./use-callback";
import UseReducerApp  from "./use-reducer";
import UseContext  from "./use-context";
import UseMemo  from "./use-memo";

import "./HooksStepByStep.css";
function HooksEntryPoint() {
  
  return (
    <>

      <div className="w3-sidebar w3-bar-block w3-black w3-card" style={{width:'145px'}}>
                <button className="w3-bar-item w3-button tablink" onClick={e => openLink(e, 'Fade')} >useState</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e => openLink(e, 'Left')}>useEffect</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Zoom')}>useReducer</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Opacity')}>useContext</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Right')}>useRef</button>
                <button className="w3-bar-item w3-button tablink"  onClick={e =>openLink(e, 'Bottom')}>useCallback</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Fading')}>useMomo</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Top')}>useLayoutEffect</button>
            
        </div>

        <div style={{marginLeft:'130px'}} >
          <Introduction />

        <div id="Fade" className="w3-container city w3-animate-opacity" style={{display:'none'}} >
            <h2>Use State</h2>
            <p>Le Hook useState.</p>
             <UseStateEntryPoint />
        </div>

        <div id="Left" className="w3-container city w3-animate-left" style={{display:'none'}}>
            <h2>Use Effect </h2>
            <p>Le Hook useEffect</p> 
            <UseEffectEntryPoint />
            
        </div>

        <div id="Right" className="w3-container city w3-animate-right" style={{display:'none'}}>
            <h2>Use Ref</h2>
            <p>Le HOOK useRef</p>
            <UseRef />
        </div>

        <div id="Top" className="w3-container city w3-animate-top"  style={{display:'none'}}>
            <h2>use Layout Effect</h2>
            <p>Le Hook useLayoutEffect.</p>
            <UseLayoutEffect />
        </div>

        <div id="Bottom" className="w3-container city w3-animate-bottom" style={{display:'none'}}>
            <h2>use Callback Effect</h2>
            <p>Le HOOK useCallback.</p> 
             <  UseCallBack  />
        </div>

        <div id="Fading" className="w3-container city w3-animate-fading"  style={{display:'none'}}>
            <h2>use Memo Effect</h2>
            <p>le HOOK useMemo.</p>
            <UseMemo />
        </div>
          <div id="Zoom" className="w3-container city w3-animate-zoom"  style={{display:'none'}}>
            <h2>use Reducer Effect</h2>
            <p>Le HOOK useReducer.</p>
            <UseReducerApp />
            
        </div>

          <div id="Opacity" className="w3-container city w3-animate-opacity"  style={{display:'none'}}>
            <h2>use Context Effecst</h2>
            <p>Le HOOK useContext</p>
              < UseContext />
        </div>

        </div> 
    </>
  );
}

export default HooksEntryPoint;