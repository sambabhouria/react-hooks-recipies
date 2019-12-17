import React from 'react';

import { openLink } from './utils.js';
import "./HooksStepByStep.css";
function HooksEntryPoint() {
  
  return (
    <>
      <div className="w3-sidebar w3-bar-block w3-black w3-card" style={{width:'145px'}}>
                <button className="w3-bar-item w3-button tablink" onClick={e => openLink(e, 'Fade')} >useState</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e => openLink(e, 'Left')}>useEffect</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Right')}>useRef</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Top')}>useLayoutEffect</button>
                <button className="w3-bar-item w3-button tablink"  onClick={e =>openLink(e, 'Bottom')}>useCallback</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Zoom')}>useMomo</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Zoom')}>useReducer</button>
                <button className="w3-bar-item w3-button tablink" onClick={ e =>openLink(e, 'Zoom')}>useContext</button>
            
        </div>

        <div style={{marginLeft:'130px'}} >

        <div id="Fade" className="w3-container city w3-animate-opacity" style={{display:'none'}} >
            <h2>Use State</h2>
            <p>London is the capital city of England.</p>
            <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        </div>

        <div id="Left" className="w3-container city w3-animate-left" style={{display:'none'}}>
            <h2>Slide in from left</h2>
            <p>Paris is the capital of France.</p> 
            <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
        </div>

        <div id="Top" className="w3-container city w3-animate-top"  style={{display:'none'}}>
            <h2>Slide in from top</h2>
            <p>Tokyo is the capital of Japan.</p>
            <p>It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
        </div>

        <div id="Right" className="w3-container city w3-animate-right" style={{display:'none'}}>
            <h2>Slide in from right</h2>
            <p>London is the capital city of England.</p>
            <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        </div>

        <div id="Bottom" className="w3-container city w3-animate-bottom" style={{display:'none'}}>
            <h2>Slide in from bottom</h2>
            <p>Paris is the capital of France.</p> 
            <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
        </div>

        <div id="Zoom" className="w3-container city w3-animate-zoom"  style={{display:'none'}}>
            <h2>Zoom in</h2>
            <p>Tokyo is the capital of Japan.</p>
            <p>It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
        </div>

        </div> 
    </>
  );
}

export default HooksEntryPoint;