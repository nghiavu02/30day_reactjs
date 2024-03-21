import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebase";
import { useEffect } from "react";

const FirebaseApp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const colRef = collection(db, "users");
  const [postId, setPostId] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      username,
      password,
      email,
    })
      .then((rs) => {
        console.log("Thanh cong");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDoc(doc(db, "users", postId));
    setPostId("");
  };
  useEffect(() => {
    getDocs(colRef).then((rs) => {
      rs.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });
  }, []);
  return (
    <div className="w-2/4 bg-white shadow-lg mx-auto mt-5 p-5">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label>Username: </label>
          <input
            type="text"
            placeholder="username"
            className=" outline-none focus:border-blue-500 border px-5 py-2 ml-5"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label>password: </label>
          <input
            type="text"
            placeholder="password"
            className=" outline-none focus:border-blue-500 border px-5 py-2 ml-5"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label>email: </label>
          <input
            type="text"
            placeholder="email"
            className=" outline-none focus:border-blue-500 border px-5 py-2 ml-5"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 border-none w-full px-5 py-2 rounded-sm text-white font-[600] text-[20px]"
          >
            ADD
          </button>
        </div>
      </form>
      <form onSubmit={handleDelete}>
        <div className="mt-5">
          <input
            type="text"
            className="outline-none focus:border-blue-500 border px-5 py-2 w-full my-5"
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[red] border-none w-full px-5 py-2 rounded-sm text-white font-[600] text-[20px]"
          >
            Remove
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirebaseApp;
