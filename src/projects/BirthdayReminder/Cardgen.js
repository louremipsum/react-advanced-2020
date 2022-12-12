import React from "react";
import "./styles.css";

function Cardgen(data) {
  return (
    <>
      <div>
        <div className="card">
          <div className="img">
            <img height="75" width="75" alt="pfp" src={data.pfp} />
          </div>
          <div className="detail">
            <p className="name">{data.name}</p>
            <p className="descrip">{data.age} years</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardgen;
