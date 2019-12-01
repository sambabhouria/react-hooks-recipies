import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/fontawesome/css/all.min.css";
import "./assets/fontawesome/css/tachyons.min.css";
import "./assets/fontawesome/css/selected.css";
import "./styles.css";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
    //   <div className="App">
    //     <Header />
    //     <div className="Content">
    //       <p>42 is the answer to everything...</p>
    //     </div>
    //   </div>
  );
}
export default App;
