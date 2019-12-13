import React, { useContext, useState } from "react";
import Store from "../context";
import "../../../assets/bootstrap.min.css";
const uuidv4 = require("uuid/v4");
export default function TodoForm() {
  const { dispatch } = useContext(Store);
  // Creating a local state to have currently writing
  // todo item that will be sent to the global store.
  const [user, setUser] = useState("");

  function handleUserChange(e) {
    setUser(e.target.value);
  }

  function handleUserAdd() {
    dispatch({ type: "ADD_USER", payload: { id: uuidv4(), name: user } });
    setUser("");
  }

  function handleSubmitForm(event) {
    console.log("code clavier", event.keyCode);
    if (event.keyCode === 13) handleUserAdd();
  }

  return (
    <div className="row">
      <div className="col-md-12"></div>
      <br />
      <div className="input-group">
        <input
          className="form-control"
          value={user}
          autoFocus={true}
          placeholder="Enter new todo"
          onKeyUp={handleSubmitForm}
          onChange={handleUserChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleUserAdd}>
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
