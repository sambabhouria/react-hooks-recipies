import React, { useContext } from "react";

import Store from "../context";
import { UserHeader } from "../header/user-header";

export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  const pluralize = count =>
    count > 1 ? `There are ${count} users.` : `There is ${count} user.`;
  let header =
    state.usersData.length === 0 ? (
      <h5 className="mainH3" style={{ color: "white" }}>
        Yay! All users are done! Take a rest!
      </h5>
    ) : (
      <UserHeader>
        <h5 className="float-right" style={{ color: "white" }}>
          {pluralize(state.usersData.length)}
        </h5>
      </UserHeader>
    );

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
            {header}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.usersData.map(user => (
                <li key={user.id} className="list-group-item">
                  <span style={{ textAlign: "left", marginRight: "250px" }}>
                    {user.name}
                  </span>{" "}
                  <button
                    className="float-right btn btn-danger btn-sm"
                    style={{ marginLeft: 10 }}
                    onClick={() =>
                      dispatch({ type: "COMPLETE", payload: user })
                    }
                  >
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
