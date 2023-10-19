import React, { useState, useEffect } from "react";
import QuestionForm from "./questionForm";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Edit = () => {
  const [loading, setLoading] = useState(true);
  const [initialState, setInitialState] = useState({});
  console.log("dd", initialState.type);
  const { id } = useParams();

  const onChange = (field, data) => {
    setInitialState((prev) => ({ ...prev, [field]: data }));
  };
  // function handleSelect(data) {
  //   const objToArr = data.map((item) => {
  //     return item["value"];
  //   });
  //   onChange("tags", objToArr);
  // }

  // const onSubmit = async () => {
  //   try {
  //     await questionCollectionRef.update({
  //       type: initialState.type,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  const updatedFields = {
    type: initialState.type,
    category: "hi",
  };

  const onSubmit = () => {
    const docRef = doc(db, "questions", id);
    console.log("Updated");
    updateDoc(docRef, updatedFields)
      .then((docRef) => {
        setLoading(false);
        console.log(docRef, "Data updated successfully");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
    setLoading(true);
  };

  const fetch = async () => {
    const docRef = doc(db, "questions", id);
    try {
      const doc = await getDoc(docRef);
      setInitialState(doc.data());
      setLoading(false);
      console.log("Cached document data:", doc.data());
    } catch (e) {
      console.log("Error getting cached document:", e);
    }

    
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <QuestionForm
          initialState={initialState}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default Edit;
