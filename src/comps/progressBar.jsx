import React from "react";
import useStorage from "../Hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;