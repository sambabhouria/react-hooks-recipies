import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/fontawesome/css/all.min.css";
import "./assets/fontawesome/css/tachyons.min.css";
import "./assets/fontawesome/css/selected.css";
import "./styles.css";
import Header from "./components/header/header";
import { Crud } from "./components/crud/user-account";

const Home = () => <div>samba</div>;
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Content">
          <Switch>
            <Route exact path="/todolist">
              <Home />
            </Route>
            <Route path="/crud">
              <Crud />
            </Route>
            <Route path="/topics">
              <div>Bonjour topic</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
