import { createContext, useContext, useState } from "react";

const MyContext = createContext();
function MyProvider(props) {
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider
      value={[count, setCount]}
      {...props}
    ></MyContext.Provider>
  );
}
function useCount() {
  const context = useContext(MyContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be within a MyProvider");
  return context;
}
export { MyProvider, useCount };
