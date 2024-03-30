import React from "react";
import { useAuth } from "../context/auth-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  return (
    <div className="p-5 bg-white shadow-md flex items-center justify-end gap-x-5">
      {user ? (
        <div className="flex items-center justify-center gap-4">
          <span className="text-[16px] font-[600]">{user.fullname}</span>
          <img
            src="https://images.unsplash.com/photo-1711700609425-0f18938cbd2c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      ) : (
        <span className="text-[16px] font-[600]">Welcome</span>
      )}
      <button
        className="w-full max-w-[100px] bg-red-600 rounded-lg py-3 text-white text-[16px] font-[600] cursor-pointer"
        onClick={() => setUser(null)}
      >
        Log out
      </button>
    </div>
  );
};

export default HeaderMain;
