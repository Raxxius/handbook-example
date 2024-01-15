// Function to increment the count
export const incrementCount = (setCount) => {
  setCount((prevCount) => prevCount + 1);
};

// Function to decrement the count
export const decrementCount = (setCount) => {
  setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
};
