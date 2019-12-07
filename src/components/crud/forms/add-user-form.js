import React, { useState } from "react";
import "./add-user-form.css";
const AddUserForm = props => {
  //1-> create an initial state with those empty values
  //2-> setting the user state to the empty values.
  //3-> temporary state, for keeping track of what's currently in the add user form.
  //4->  Having initial state in a variable is useful, because after we submit the form,
  // we can return it to the initial, empty value.
  const initialFormState = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="add-user-form">
      <h1>
        Add User !<span>You can add user now!</span>
      </h1>

      <form
        onSubmit={event => {
          event.preventDefault();
          if (!user.name || !user.username) return;

          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <div className="inner-wrap">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-section">
          <button className="button muted-button">Add new user</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
