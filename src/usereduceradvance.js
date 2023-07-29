import React, { useReducer, useEffect } from "react";
const reducer = (state, action) => {
  if (action.type === "UPDATE_USER_DATA") {
    return {
      ...state,
      userData: action.payload,
    };
  }
  return state;
};
const Final = () => {
  const fetchUsersData = async (apiUrl) => {
    dispatch({ type: "LOADING", payloa: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      dispatch({ type: "UPDATE_USER_DATA", payload: data });
      dispatch({ type: "LOADING", payloa: false });
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payloa: false });
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: error.message },
      });
    }
  };
  useEffect(() => {
    fetchUsersData("https://jsonplaceholder.typicode.com/users");
  }, []);
  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>user iNformation</h2>
      {state.userData.map((eachuser) => {
        const { id, name, email } = eachuser;
        return (
          <div key={id} style={{ backgroundColor: "lightcoral" }}>
            <h3>{name}</h3>
            <p>{email}</p>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Final;
