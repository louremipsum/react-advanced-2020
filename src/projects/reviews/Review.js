import React from "react";
import Rcomponent from "./Rcomponent";
import "./styles.css";

function Review() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Rcomponent />
      </div>
    </main>
  );
}

export default Review;
