import React, { useMemo, useState } from "react";
import "./memo.css";

const Mmeo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  // Handlers for incrementing/decrementing counters
  const handleClickOne = () => {
    setCounterOne((prev) => prev + 1);
  };

  const handleClickTwo = () => {
    setCounterTwo((prev) => prev - 1);
  };

  // Memoize the result of isEven calculation
  const isEven = (value) => {
    let i = 0;
    while (i < 2000000000) i++; // Simulate a heavy calculation
    return value % 2 === 0;
  };

  const isCounterOneEven = useMemo(() => isEven(counterOne), [counterOne]);

  return (
    <section className="sectionMemo">
      <h1>Use Memo</h1>
      <h2>{isCounterOneEven ? "Even" : "Odd"}</h2> {/* Display Even/Odd */}
      <div className="btns">
        <button onClick={handleClickOne}>+</button>
        <h3>{counterOne}</h3>
        <button onClick={handleClickTwo}>-</button>
        <h3>{counterTwo}</h3>
      </div>
    </section>
  );
};

export default Mmeo;
