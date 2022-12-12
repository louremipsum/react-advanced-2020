import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <>
      <h2>useState error example</h2>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </>
  );
};

export default ErrorExample;
