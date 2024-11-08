import React from "react";

const Button = ({ text, handelAdd }) => {
  console.log("hhhhhhhhhhh ");

  return (
    <button className="btn age-btn" onClick={handelAdd}>
      + {text}
    </button>
  );
};

export default React.memo(Button);
