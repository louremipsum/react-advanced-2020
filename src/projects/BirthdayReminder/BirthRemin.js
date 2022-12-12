import React from "react";
import { useState } from "react";
import Cardgen from "./Cardgen";
import data from "./data";
import "./styles.css";

function BirthRemin() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section>
        <div className="main">
          <div className="cardBody">
            <p className="heading"> {people.length} Birthdays in Total</p>
            {people.map((person) => (
              <Cardgen {...person} key={person.id} />
            ))}
            <button type="button" className="btn" onClick={() => setPeople([])}>
              Clear Items
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BirthRemin;
