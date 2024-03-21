import { useRef, useState } from "react";
import "./index.scss";
import Timer1 from "./components/Timer1";
import Timer from "./components/Timer";
import InputFocus from "./components/InputFocus";
import FirebaseApp from "./firebase/FirebaseApp";
import FirebaseAuth from "./firebase/FirebaseAuth";

function App() {
  return (
    <div className="">
      <FirebaseAuth></FirebaseAuth>
    </div>
  );
}

export default App;
