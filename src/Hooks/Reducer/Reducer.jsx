import React, { useReducer } from "react";
import ButtonCounter from "./ButtonCounter";
import "./Reducer.css";
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count + 1 };
    case "resete":
      return initialState;
    default:
      throw new Error();
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="reducer-container">
      <h1 className="reducer-title">Reducer Hooks</h1>
      <div className="counter-card">
        <h2 className="counter-heading">Count: {state.count}</h2>
        <div className="counter-buttons">
          <ButtonCounter
            handelClick={handelClick(dispatch({ type: "incriment" }))}
          >
            +
          </ButtonCounter>
          <ButtonCounter handelClick={dispatch({ type: "decrement" })}>
            -
          </ButtonCounter>
          <ButtonCounter handelClick={dispatch({ type: "resete" })}>
            reset
          </ButtonCounter>
        </div>
      </div>
    </div>
  );
};

export default Reducer;
