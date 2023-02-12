import React from "react";
import { ProjectStorage, projectFireStore } from "../firebase/config";
import { useState, useEffect, timeStamp } from "react";
import { async } from "@firebase/util";
const useStorage = (file) => {
  const [progress, setprogress] = useState(0);
  const [error, seterror] = useState(null);
  const [url, seturl] = useState(null);

  useEffect(() => {
    const StorageRef = ProjectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection("images");
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
        // const createdAt = timeStamp();
        collectionRef.add({ url, createdAt: timeStamp });
        seturl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
