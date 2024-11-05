import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

// Setting default props
Greeting.defaultProps = {
  name: "Guest",
  age: 20,
};

// Defining prop types (optional, but good practice)
Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
export default Greeting;
