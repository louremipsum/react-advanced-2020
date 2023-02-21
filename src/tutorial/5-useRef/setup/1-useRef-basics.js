import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  // console.log(refContainer);
  useEffect(() => {
    console.log(refContainer.current.children[0].children[1]);
    refContainer.current.children[0].children[1].focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit} ref={refContainer}>
        <div>
          <h4>Child 2</h4>
          <input type="text" ref={refContainer} />
          <button type="submit">button</button>
        </div>
        <div>
          <h4>Child 1</h4>
          <input type="text" ref={refContainer} />
          <button type="submit">button</button>
        </div>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
