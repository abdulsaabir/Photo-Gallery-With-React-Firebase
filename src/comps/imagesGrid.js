import React from "react";
import UseFirestore from "../Hooks/useFirestore";

const ImagesGrid = () => {
  const { docs } = UseFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            // onClick={() => setSelectedImg(doc.url)}
          >
            <img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </div>
        ))}
    </div>
  );
};

export default ImagesGrid;
