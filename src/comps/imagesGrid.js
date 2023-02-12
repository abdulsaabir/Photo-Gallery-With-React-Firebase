import React from "react";
import UseFirestore from "../Hooks/useFirestore";

const ImagesGrid = () => {
  const data = UseFirestore();
  console.log(data);
  return <div className="img-grid"></div>;
};

export default ImagesGrid;
