import React from "react";
import "./user-table.css";
const UserTable = props => (
  <table className="user-table user-table-rounded">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr className="no-data-row">
          <td
            style={{ textAlign: "center" }}
            className="no-data-row-decoration"
            colSpan={3}
          >
            No users
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
