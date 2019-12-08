import React, { useState } from "react";
import UserTable from "../tables/user-table";
import AddUserForm from "../forms/add-user-form";
import EditUserForm from "./forms/edit-user-form";
import "./main.css";
const uuidv4 = require("uuid/v4");
const Crud = () => {
  // Data
  const usersData = [
    { id: uuidv4(), name: "DIALLO", username: "Mamadou" },
    { id: uuidv4(), name: "BARRY", username: "Samba" },
    { id: uuidv4(), name: "SOW", username: "Moustapha" },
    { id: uuidv4(), name: "BAH", username: "Mohamed" },
  ];

  const [users, setUsers] = useState(usersData);

  // adding  a new user to state
  const addUser = user => {
    user.id = uuidv4();
    //  update the user state from useState by setUsers .
    setUsers([...users, user]);
  };

  // deleteUser,take the ID of the user and filter them out of the user array.
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Updating a user ==>  state for whether or not edit mode is turned on
  const [editing, setEditing] = useState(false);

  // Since we don't know who is being edited until it's selected,
  // we'll create initial empty state for the form, like we did with the add form.
  const initialFormState = { id: null, name: "", username: "" };

  // Before clicking the edit mod we dont knwo the user to edit initialFromState ==null
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };
  //When Edit is selected on a user, it should turn on edit mode, and set the current user
  const editRow = user => {
    console.log("current usr", user);
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container">
      <h3>CRUD App with Hooks</h3>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h5>Edit user</h5>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h5>Add user</h5>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h5>View users</h5>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Crud;
