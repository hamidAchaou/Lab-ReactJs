import React from "react";
import Greeting from "./Greeting";

const Props = () => {
  return (
    <div>
      <Greeting />
      <Greeting name="Mehdi" age={23} />
    </div>
  );
};

export default Props;
