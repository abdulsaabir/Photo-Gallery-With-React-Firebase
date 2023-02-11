import React from "react";
import { useState } from "react";

const UploadPhote = () => {
  const [File, setFile] = useState(null);
  const [Error, setError] = useState(null);
  const allowedTypes = ["image/png", "image/jpeg"];
  function handleChange(e) {
    let selected = e.target.files[0];
    if (selected && allowedTypes.includes(selected.type)) setFile(selected);
    else
      setFile(null), console.log("please select an image file (png or jpeg)");
  }
  return (
    <form>
      <input type="file" onChange={handleChange} />
      <img src={File} alt="" />
    </form>
  );
};

export default UploadPhote;
