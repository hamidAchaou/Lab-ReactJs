import React from "react";

const ButtonCounter = ({ children }) => {
  return (
    <button className="btnCounter" onClick={handelClick}>
      {children}
    </button>
  );
};

export default ButtonCounter;
