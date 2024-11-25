import React from "react";

const ButtonCounter = ({ handelClick, children }) => {
  return (
    <button className="btnCounter" onClick={handelClick}>
      {children}
    </button>
  );
};

export default ButtonCounter;
