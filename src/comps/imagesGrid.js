import React from "react";
import UseFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion/dist/framer-motion";

const ImagesGrid = ({ selectedImage }) => {
  const { docs } = UseFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => selectedImage(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImagesGrid;
