import React from "react";
import ImagesGrid from "./comps/imagesGrid";
import Title from "./comps/Title";
import UploadPhote from "./comps/UploadPhote";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadPhote />
      <ImagesGrid />
    </div>
  );
}

export default App;
