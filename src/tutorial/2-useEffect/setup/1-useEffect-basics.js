import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call use effect");
    document.title = value === 0 ? "React App" : `New Messages(${value})`;
  }, [value]);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  console.log("render comoponent");
  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
