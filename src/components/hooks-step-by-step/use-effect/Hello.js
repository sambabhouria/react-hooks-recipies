import React from "react";

export const Hello = () => {
  React.useEffect(() => {
    console.log("render");

    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>Hello this help to understant userEffect clear</div>;
};
