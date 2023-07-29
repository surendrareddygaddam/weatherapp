import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    const newPersons = state.data.filer((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    return {
      ...state,
      data: newPersons,
      length: state.length - 1,
    };
  }
  return state;
};

const Final = () => {
  const initialState = {
    data: [
      {
        id: "123",
        firstName: "surendra",
        lastName: "gaddam",
        gmail: "surendra@gmail.com",
      },
      {
        id: "1234",
        firstName: "emma",
        lastName: "watson",
        gmail: "emma@gmail.com",
      },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const deleteHandler = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };
  const editHandler = (id) => {
    dispatch({
      type: "EDIT_PERSON",
      payload: id,
    });
  };
  return (
    <div>
      <h1>current users length:{state.length}</h1>
      {state.data.map((eachItem) => {
        const { id, firstName, lastName, gmail } = eachItem;
        return (
          <div key={id}>
            <h3>{firstName}</h3>
            <h2>{lastName}</h2>
            <p>{gmail}</p>
            <button onClick={() => deleteHandler(id)}>Delete</button>
            <button onClick={() => editHandler(id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Final;
