import React, { useState } from "react";
import ChildComponet from "./usecontextchild";
const ParentComponent = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "emma",
    lastName: "watson",
    email: "emma@gmail.com",
  });
  return (
    <div>
      <h1>useContext</h1>
      <ChildComponet userDetails={userDetails} />
    </div>
  );
};
export default ParentComponent;
