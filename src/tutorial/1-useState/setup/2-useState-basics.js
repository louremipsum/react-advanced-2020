import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(5));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(handler);
  const [text, setText] = useState("random title");
  const handleClick = () => {
    text === "random title" ? setText("hello world") : setText("random title");
  };
  return (
    <>
      <h2>useState basic example</h2>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </>
  );
};

export default UseStateBasics;
