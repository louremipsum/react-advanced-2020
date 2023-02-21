import React from "react";
import { useState } from "react";
import data from "./data.js";
import "./styles.css";
import { FaQuoteLeft } from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Rcomponent() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const mod = (n1, n2) => {
    if (n1 >= 0) return n1 % n2;
    else return (n1 % n2) + n2;
  };

  const rand = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="review">
      <div>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <div className="i-quote">
          <FaQuoteLeft color="white" />
        </div>
      </div>
      <p className="name">{name}</p>
      <p className="job">{job}</p>
      <p className="desp">{text}</p>
      <div style={{ display: "flex" }}>
        <GrFormPrevious
          onClick={() => setIndex(mod(index - 1, data.length))}
          className="prev"
        />
        <GrFormNext
          onClick={() => setIndex(mod(index + 1, data.length))}
          className="next"
        />
      </div>
      <button
        className="btn"
        onClick={() => setIndex(rand(0, data.length - 1))}
      >
        Surprise me!
      </button>
    </div>
  );
}

export default Rcomponent;
