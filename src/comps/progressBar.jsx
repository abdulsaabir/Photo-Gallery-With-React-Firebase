import React from "react";
import { useEffect } from "react";
import useStorage from "../Hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  let { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) setFile(null);
  }, [url, setFile]);
  progress += 10;
  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
