import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("");
  const [height, setHeight] = useState();
  const textRef = useRef(null);
  const handleChange = (e) => {
    setHeight("auto");
    setText(e.target.value);
  };
  useEffect(() => {
    setHeight(`${textRef.current.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5" style={{ minHeight: "auto" }}>
      <textarea
        className="border outline-none overflow-hidden w-full max-w-[400px] p-5 text-[20px] focus:border-blue-500"
        // value={text}
        onChange={handleChange}
        ref={textRef}
        style={{
          height: height,
        }}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
