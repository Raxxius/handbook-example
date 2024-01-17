import { useState } from "react";
import { incrementCount, decrementCount } from "./functions";
import ColourSubComponent from "./ColorSubComponent";
import CounterSubComponent from "./CounterSubComponent";
import styles from "./CounterColourComponent.module.css";

const CounterColourComponent = ({ changeColour }) => {
  /* useState */
  const [count, setCount] = useState(0);

  return (
    <div className={`${styles.reactComponent} react-component primary`}>
      <ColourSubComponent changeColour={changeColour} styles={styles} />
      <CounterSubComponent
        styles={styles}
        count={count}
        setCount={setCount}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </div>
  );
};

export default CounterColourComponent;
