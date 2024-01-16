import { useState } from "react";
import { incrementCount, decrementCount } from "./functions";
import ColourSubComponent from "./ColorSubComponent";
import CounterSubComponent from "./CounterSubComponent";

const CounterColorComponent = ({ changeColour }) => {
  /* useState */
  const [count, setCount] = useState(0);

  return (
    <div className="react-component counter-colour-component">
      <ColourSubComponent changeColour={changeColour} />
      <CounterSubComponent
        count={count}
        setCount={setCount}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </div>
  );
};

export default CounterColorComponent;
