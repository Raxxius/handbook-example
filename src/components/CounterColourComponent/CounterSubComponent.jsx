const CounterSubComponent = ({
  count,
  setCount,
  incrementCount,
  decrementCount,
}) => (
  <div className="count-box">
    <h2>Counter</h2>
    <p>Count: {count}</p>
    <button onClick={() => incrementCount(setCount)}>Increment</button>
    <button onClick={() => decrementCount(setCount)}>Decrement</button>
  </div>
);

export default CounterSubComponent;
