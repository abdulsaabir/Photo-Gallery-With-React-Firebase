import React, { useState } from "react";
import ImagesGrid from "./comps/imagesGrid";
import Modal from "./comps/modal";
import Title from "./comps/Title";
import UploadPhote from "./comps/UploadPhote";

function App() {
  const [selectedImage, setselectedImage] = useState();
  return (
    <div className="App">
      <Title />
      <UploadPhote />
      <ImagesGrid setselectedImage={setselectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setselectedImage={setselectedImage}
        />
      )}
    </div>
  );
}

export default App;
