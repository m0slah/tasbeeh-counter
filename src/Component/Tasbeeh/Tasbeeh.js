import React, { useState } from "react";
import "./Tasbeeh.css";

function Tasbeeh() {
  const [enterNumber, setEnteredNumber] = useState(0);

  const increase = () => {
    setEnteredNumber(enterNumber + 1);
  };

  const clear = () => {
    setEnteredNumber(0);
  };

  return (
    <div className="container">
      <h1 className="title">Tasbeeh Counter</h1>
      <h1 className="display">{enterNumber}</h1>

      <div className="buttons">
        <button className="count" onClick={increase}>
          Count
        </button>
        <button className="clear" onClick={clear}>
          C
        </button>
      </div>
    </div>
  );
}

export default Tasbeeh;
