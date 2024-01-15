import { useState } from "react";
import { incrementCount, decrementCount } from "./functions";

const CounterColorComponent = ({ changeColour }) => {
  /* useState */
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="colour-box">
        <button onClick={() => changeColour(1)}>Cycle Up</button>
        <button onClick={() => changeColour(-1)}>Cycle Down</button>
      </div>
      <div className="count-box">
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => incrementCount(setCount)}>Increment</button>
        <button onClick={() => decrementCount(setCount)}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterColorComponent;
