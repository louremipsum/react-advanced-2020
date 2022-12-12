import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const complexInc = () => {
    setTimeout(() => {
      // setCount(count + 1);
      setCount((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <>
      <section>
        <h1>regular counter</h1>
        <h2>{count}</h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
      </section>

      <section>
        <h1>more complex regular counter</h1>
        <h2>{count}</h2>
        <button className="btn" onClick={complexInc}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
