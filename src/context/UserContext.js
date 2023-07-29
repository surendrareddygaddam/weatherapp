import React from "react";

const initialState = {
  firstName: "surendra",
  lastName: "gaddam",
  email: "surendrareddy666111@gmail.com",
};

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};
