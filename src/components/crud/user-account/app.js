import React, { useState } from "react";
import UserTable from "../tables/user-table";
import AddUserForm from "../forms/add-user-form";
import EditUserForm from "../forms/edit-user-form";
import "../../main.css";
const uuidv4 = require("uuid/v4");
const Crud = () => {
  // Data
  const usersData = [
    { id: uuidv4(), name: "DIALLO", username: "Mamadou" },
    { id: uuidv4(), name: "BARRY", username: "Samba" },
    { id: uuidv4(), name: "SOW", username: "Moustapha" },
    { id: uuidv4(), name: "BAH", username: "Mohamed" },
  ];

  const initialFormState = { id: null, name: "", username: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container">
      <h3>CRUD App with Hooks</h3>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h5>Edit user</h5>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
            <>
              <h5>Add user</h5>
              <AddUserForm addUser={addUser} />
            </>
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
