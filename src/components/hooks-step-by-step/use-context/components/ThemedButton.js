import React, {useContext} from "react";

import { ThemeContext } from "../UseContextThemeApp"; 

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Je suis stylé par le contexte de thème !
    </button>
  );
}


export default ThemedButton