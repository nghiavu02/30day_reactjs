import React from "react";

const SignUpFormHook = () => {
  return (
    <div className="max-w-[500px] mx-auto p-5 bg-white text-[16px] font-[600]">
      <form autoComplete="off">
        <div className="flex flex-col gap-y-4">
          <label htmlFor="firstName">Firstname: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="lastName">lastName: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            name="email"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="password">password: </label>
          <input
            type="text"
            id="password"
            name="password"
            className="rounded-xl px-5 py-4 border border-gray-400 outline-none"
          />
        </div>
        <div>
          <button className="bg-blue-900 w-full p-4 mt-5 rounded-xl text-white">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpFormHook;
