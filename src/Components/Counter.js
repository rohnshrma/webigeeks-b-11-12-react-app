import React, { useReducer, useState } from "react";

// return a new state
function reducerFunction(state, action) {
  console.log("reducer running");
  console.log(action, state);

  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === "INCREASE") {
    return {
      count: state.count + action.payload,
    };
  }

  return initialState;
}

const initialState = {
  count: 0,
};

const Counter = () => {
  const [countState, dispatch] = useReducer(reducerFunction, initialState);

  const incrementHandler = (e) => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = (e) => {
    dispatch({ type: "DECREMENT" });
  };
  const increaseHandler = (e) => {
    dispatch({ type: "INCREASE", payload: 50 });
  };

  return (
    <div className="counter">
      <h1>{countState.count}</h1>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={increaseHandler}>increase by 50</button>
    </div>
  );
};

export default Counter;
