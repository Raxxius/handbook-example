const CounterSubComponent = ({
  styles,
  count,
  setCount,
  incrementCount,
  decrementCount,
}) => (
  <div className={`${styles.countBox} secondary}`}>
    <h2>Counter</h2>
    <p>Count: {count}</p>
    <div>
      <button
        className="call-to-action"
        onClick={() => incrementCount(setCount)}
      >
        Increment
      </button>
      <button
        className="call-to-action"
        onClick={() => decrementCount(setCount)}
      >
        Decrement
      </button>
    </div>
  </div>
);

export default CounterSubComponent;
