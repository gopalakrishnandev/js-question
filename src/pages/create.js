import React from "react";
import QuestionForm from "./questionForm";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../config/firebase";
function Create() {
  const [initialState, setInitialState] = React.useState({});

  // const questionCollectionRef = collection(db, "questions");

  const onChange = (field, data) => {
    setInitialState((prev) => ({ ...prev, [field]: data }));
  };

  // const onSubmit = async () => {
  //   try {
  //     await addDoc(questionCollectionRef, {
  //       type: initialState.type,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <QuestionForm
      initialState={initialState}
      onChange={onChange}
      // onSubmit={onSubmit}
    />
  );
}

export default Create;
