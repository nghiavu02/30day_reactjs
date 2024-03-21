import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const InputFocus = () => {
  const focusRef = useRef(null);
  useEffect(() => {}, []);
  focusRef.current.focus();
  return (
    <div className="w-2/4 mx-auto mt-10">
      <input
        ref={focusRef}
        type="text"
        className="w-full border p-5 outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputFocus;
