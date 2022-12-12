import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("peter");
  const [error, setError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h2>short circuit</h2> */}
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>value: {secondValue}</h1> */}
      <h1>{text || "LouremIpsum"}</h1>
      <button className="btn" onClick={() => setError(!error)}>
        Toggle error
      </button>
      {error && <h1>Error ...</h1>}
      {error ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
