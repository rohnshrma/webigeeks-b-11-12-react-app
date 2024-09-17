import React, { useState } from "react";

const Time = () => {
  const [time, setTime] = useState("Time");

  const clickHandler = () => {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  };

  setInterval(clickHandler, 1000);

  return (
    <div>
      <h1>{time}</h1>
      {/* <button onClick={clickHandler}>Get Time</button> */}
    </div>
  );
};

export default Time;
