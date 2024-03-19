import React, { useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <div>
      <h3 className="text-[24px] mb-3">Timer: {timer || 0}s</h3>
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
  );
};

export default Timer;
