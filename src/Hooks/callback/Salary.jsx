import React from "react";

const Salary = React.memo(({ salary }) => {
  console.log("Salary");

  return (
    <>
      <h2 className="value-title">Salary: {salary}</h2>
    </>
  );
});

export default Salary;
