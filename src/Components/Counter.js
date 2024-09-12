import React, { useState } from "react";

const Counter = () => {
  console.log(new Date().toLocaleTimeString());

  var [count, setCount] = useState(0);
  console.log("counter loaded", count);

  const incrementHandler = () => {
    var newValue = count + 1;
    setCount(newValue);
  };
  const decrementHandler = () => {
    var newValue = count - 1;
    setCount(newValue);
  };
  const increaseHandler = () => {
    var newValue = count + 50;
    setCount(newValue);
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increaseHandler}>increase by 50</button>
    </div>
  );
};

export default Counter;
