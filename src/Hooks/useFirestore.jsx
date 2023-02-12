import React, { useEffect } from "react";
import { projectFireStore } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const useFirestore = () => {
  let images = collection(projectFireStore, "images");
  async function getDocsfunc() {
    let snapshot = await getDocs(images);
    snapshot.forEach((element) => {
      console.log(element.data());
    });
  }
  useEffect(() => {
    getDocsfunc();
  }, []);

  return <div></div>;
};

export default useFirestore;
