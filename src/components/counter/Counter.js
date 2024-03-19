import React, { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // setCount(count + 1);
    console.log(count);
  }, [count]);
  return (
    <div>
      <div>{count || 0}</div>
      <button
        className="bg-blue-500 text-white font-[500] text-5  text-center justify-center py-5 px-[60px] rounded-[20px]"
        onClick={() => setCount(count + 1)}
      >
        Sumit
      </button>
    </div>
  );
};

export default Counter;
