import React from "react";
import Title from "./comps/Title";
import UploadPhote from "./comps/UploadPhote";
import UseFirestore from "./Hooks/useFirestore";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadPhote />
      <UseFirestore />
    </div>
  );
}

export default App;
