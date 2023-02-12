import React from "react";

function Modal({ selectedImage, setselectedImage }) {
  function handleModalClose(e) {
    if (e.target.classList.contains("backdrop")) setselectedImage(null);
  }
  return (
    <div className="backdrop" onClick={(e) => handleModalClose(e)}>
      <img src={selectedImage} alt="imageSelected" />
    </div>
  );
}

export default Modal;
