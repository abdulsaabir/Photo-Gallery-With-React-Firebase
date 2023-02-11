import React from "react";
import { useState } from "react";
import ProgressBar from "./progressBar";

const UploadPhote = () => {
  const [file, setFile] = useState(null);
  const [Error, setError] = useState(null);
  const allowedTypes = ["image/png", "image/jpeg"];
  function handleChange(e) {
    let selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("please select an image file (png or jpeg)");
    }
  }
  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {Error && <div className="error">{Error}</div>}
        {file && <div className="File">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadPhote;
