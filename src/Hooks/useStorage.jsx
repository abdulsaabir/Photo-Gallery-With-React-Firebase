import React from "react";
import { ProjectStorage } from "../firebase/config";
import { useState, useEffect } from "react";
import { async } from "@firebase/util";
const useStorage = (file) => {
  const [progress, setprogress] = useState(0);
  const [error, seterror] = useState(null);
  const [url, seturl] = useState(null);

  useEffect(() => {
    const StorageRef = ProjectStorage.ref(file.name);

    StorageRef.put(file).on(
      "state_changed",
      (snap) => {
        const Percantage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setprogress(Percantage);
      },
      (err) => {
        seterror(err);
      },
      async () => {
        const url = await StorageRef.getDownloadURL();
        seturl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
