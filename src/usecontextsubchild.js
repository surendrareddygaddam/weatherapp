import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
const SubChildComponet = () => {
  const data = useContext(UserContext);

  const { firstName, lastName, email } = data;
  return (
    <div>
      <h2>SubChild Component</h2>
      <div>Firstname:{firstName}</div>
      <div>Lastname:{lastName}</div>
      <div>email:{email}</div>
    </div>
  );
};

export default SubChildComponet;
