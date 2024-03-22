import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutDropDown(e) {
      if (!dropdownRef.current?.contains(e.target)) setDropdown(false);
    }
    window.addEventListener("click", handleClickOutDropDown);
    return () => {
      window.removeEventListener("click", handleClickOutDropDown);
    };
  }, []);
  return (
    <div className="max-w-[400px] mt-5 relative" ref={dropdownRef}>
      <div
        className="w-full border p-5 rounded-lg"
        onClick={() => setDropdown(!dropdown)}
      >
        Select
      </div>
      {dropdown && (
        <div className="p-5 absolute top-full left-0 right-0 bg-white border w-full rounded-lg">
          <div className="border-b py-5">ReactJS</div>
          <div className="border-b py-5">ReactJS</div>
          <div className=" py-5">ReactJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
