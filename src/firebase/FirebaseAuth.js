import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [infor, setInfor] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setInfor(currentUser);
      } else {
        setInfor("");
      }
    });
  }, [infor]);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    console.log("create user successfully");
    await updateProfile(auth.currentUser, {
      displayName: "vũ ngọc nghĩa",
    });
    setInfor(user);
  };
  const handleSingOut = async () => {
    try {
      await signOut(auth);
      setInfor("");
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
      // Xử lý thông báo lỗi tại đây
    }
  };
  return (
    <div className="w-2/4 bg-white shadow-lg mx-auto mt-5 p-5">
      <form action="" onSubmit={handleCreateUser}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="username"
            className=" outline-none focus:border-blue-500 border px-5 py-2  w-full"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="password"
            className=" outline-none focus:border-blue-500 border px-5 py-2  w-full"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 border-none w-full px-5 py-2 rounded-sm text-white font-[600] text-[20px]"
          >
            SignUp
          </button>
        </div>
      </form>
      <div>
        <span>{infor?.displayName}</span>
        <button
          className="bg-blue-500 border-none px-5 py-2  text-white font-[600] text-[20px] mt-5 rounded-xl ml-5"
          onClick={handleSingOut}
        >
          SingOut
        </button>
      </div>
    </div>
  );
};

export default FirebaseAuth;
