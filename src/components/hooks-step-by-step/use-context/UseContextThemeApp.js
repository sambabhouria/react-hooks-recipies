import React from "react";
import Toolbar from "./components/Toolbar";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.light);

const UseContextThemeApp = () =>  {
  return (
    <div className="row">
      <div className="col">
        <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
        </ThemeContext.Provider> 
       </div>
     </div>
  );
}


export default UseContextThemeApp;
