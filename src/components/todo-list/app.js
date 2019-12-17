import React, { useContext, useReducer } from "react";
import Store from "./context";
import reducer from "./reducer";
import { usePersistedContext, usePersistedReducer } from "./usePersist";
import UserForm from "./forms/user-form";
import UserList from "./list/user-list";
import "../../assets/bootstrap.min.css";

import "../main.css";

const TodoList = () => {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `userData` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state", // The localStorage key
  );

  return (
    // State.Provider passes the state and dispatcher to the down
    // Utilise un Provider pour passer les données  plus bas dans l’arbre.
    // N’importe quel composant peut les lires, quelle que soit sa profondeur.

    <Store.Provider value={{ state, dispatch }}>
      <div className="container">
        <h3 className="mainH3"> User List Hooks</h3>
        <div className="flex-row">
          <div className="flex-large">
            <UserForm />
            <UserList />
          </div>
        </div>
      </div>
    </Store.Provider>
  );
};
export default TodoList;
