import React from "react";

export const UserHeader = props => (
  <div className="row">
    <div className="col-md-8">
      <h5 style={{ color: "white" }}>User List</h5>
    </div>
    <div className="col-md-4">{props.children}</div>
  </div>
);
