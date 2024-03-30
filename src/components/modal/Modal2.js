import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
const Modal2 = ({ open = false, handleClose = () => {} }) => {
  return (
    <div
      className={`modal fixed inset-0 flex items-center justify-center p-5 z-[999] ${open ? "" : "opacity-0 invisible"}`}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-20"
        onClick={handleClose}
      ></div>
      <div className="modal-content relative z-10 w-full max-w-[482px] bg-white p-10 rounded-lg">
        <span
          className="w-10 h-10  absolute top-0 right-0 flex justify-center items-center bg-white rounded-full -translate-y-2/4 hover:bg-red-500 translate-x-2/4 cursor-pointer"
          onClick={handleClose}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
              fill="#84878B"
            />
          </svg>
        </span>
        <div className="text-[38px] font-[500] text-center">Welcome Back!</div>
        <div>
          <label htmlFor="email" className="text-[#3B3E44] text-[14px]">
            Email address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="p-[14px] bg-[#E7ECF3] text-[14px] w-full rounded-lg mt-2 mb-5 outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-[#3B3E44] text-[14px]">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="p-[14px] bg-[#E7ECF3] text-[14px] w-full rounded-lg mt-2 mb-5 outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full rounded-lg bg-[#316BFF] text-white text-[20px] font-semibold py-3 mt-10 hover:opacity-90">
          Sign in
        </button>
      </div>
    </div>
  );
};
Modal2.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default Modal2;
