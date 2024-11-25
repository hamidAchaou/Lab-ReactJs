import React, { useReducer } from "react";
import ButtonCounter from "./ButtonCounter";
import "./ExampleOne.css";

// Initial state and reducer function should be defined first
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 }; // Fix decrement logic (was adding 1)
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
};

const ExampleOne = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="reducer-container">
      <h1 className="reducer-title">Reducer Hooks</h1>
      <div className="counter-card">
        <h2 className="counter-heading">Count: {state.count}</h2>
        <div className="counter-buttons">
          <ButtonCounter handelClick={() => dispatch({ type: "increment" })}>
            +
          </ButtonCounter>
          <ButtonCounter handelClick={() => dispatch({ type: "decrement" })}>
            -
          </ButtonCounter>
          <ButtonCounter handelClick={() => dispatch({ type: "reset" })}>
            reset
          </ButtonCounter>
        </div>
      </div>
    </div>
  );
};

export default ExampleOne;
