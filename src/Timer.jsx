import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="timer">
      <h2>{seconds}s</h2>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
