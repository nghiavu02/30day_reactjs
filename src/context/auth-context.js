import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = (props) => {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "vunghia",
    email: "vn.nghia.02@gmail.com",
    password: "123456",
  });
  return (
    <AuthContext.Provider
      value={{ user, setUser }}
      {...props}
    ></AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be within a AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
