import React, { useCallback, useState } from "react";
import "./callback.css";
import Button from "./Button";
import Salary from "./Salary";
import Age from "./Age";

const Callback = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  // Increase salary by 1000
  const handleAddSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, []);

  // Increase age by 1
  const handleAddAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, []);

  return (
    <div className="callback-container">
      <div className="values-container">
        <Salary salary={salary} />
        <Age age={age} />
      </div>
      <div className="button-container">
        <Button text="Salary" handelAdd={handleAddSalary} />
        <Button text="Age" handelAdd={handleAddAge} />
      </div>
    </div>
  );
};

export default Callback;
