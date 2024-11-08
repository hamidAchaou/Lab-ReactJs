import React from "react";

const Age = React.memo(({ age }) => {
  console.log("Age");

  return (
    <>
      <h2 className="value-title">Age: {age}</h2>
    </>
  );
});

export default Age;
