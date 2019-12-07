import React, { useState, useEffect } from "react";
import "./add-user-form.css";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <div className="add-user-form">
      <h1>
        Eddit User !<span>You can eddit user now!</span>
      </h1>

      <form
        onSubmit={event => {
          event.preventDefault();

          props.updateUser(user.id, user);
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
          <button className="button muted-button">Update user</button>
          <button onClick={() => props.setEditing(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
