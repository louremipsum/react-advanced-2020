import React from "react";
import "./styles.css";
import questions from "./questions";
import Component from "./Component";

function Accordion() {
  return (
    <main className="container">
      <div className="card">
        <h2>Questions and Answer about Login</h2>
        <section className="compCard">
          {questions.map((item) => (
            <Component {...item} key={item.id} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Accordion;
