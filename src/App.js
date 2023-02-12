import React from "react";
import Title from "./comps/Title";
import UploadPhote from "./comps/UploadPhote";
import { timeStamp } from "./firebase/config";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadPhote />
    </div>
  );
}

export default App;
