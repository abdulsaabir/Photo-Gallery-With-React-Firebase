import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

function Modal({ selectedImage, setselectedImage }) {
  function handleModalClose(e) {
    if (e.target.classList.contains("backdrop")) setselectedImage(null);
  }
  return (
    <motion.div
      className="backdrop"
      onClick={handleModalClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;
