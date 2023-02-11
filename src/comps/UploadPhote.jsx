import React from "react";
import { useState } from "react";

const UploadPhote = () => {
  const [File, setFile] = useState(null);
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
      <div className="outPut">
        {Error && <div className="error">{Error}</div>}
        {File && <div className="File">{File.name}</div>}
      </div>
      <img src={File} alt="" />
    </form>
  );
};

export default UploadPhote;
