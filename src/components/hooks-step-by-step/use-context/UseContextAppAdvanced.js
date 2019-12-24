import React from "react";
import ComponentC from "./components/ComponentC";

// we to create the context from reaact contect
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function UseContextAppAdvanced() {
  return (
    <div>
      {/* we neeed to creat the provider */}
      <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default UseContextAppAdvanced;
