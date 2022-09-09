import React from "react";
import { useState, useEffect } from "react";

export default function QuizWidget() {
  const [allQuizes, setAllQuizes] = useState([]);

  function FetchData() {
    setAllQuizes(["3", "3", "3", "3", "3", "3", "3"]);
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      {allQuizes.map((quiz) => <div>{quiz}</div>)}
    </>
  );
}
