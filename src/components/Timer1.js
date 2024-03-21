import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Timer1 = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  const handleStart = () => {
    console.log("start");
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    console.log(timerRef.current);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  console.log(timerRef.current);
  //   console.log("render");
  return (
    <div>
      <h3 className="text-[24px] mb-3">Timer: {timer || 0}s</h3>
      <div>
        <button
          className="w-[100px] h-[50px] bg-blue-800 justify-center text-center rounded-lg text-white text-[18px] mr-5"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="w-[100px] h-[50px] bg-red-800 justify-center text-center rounded-lg text-white text-[18px]"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer1;
