import React, { useState } from "react";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";

function Component(item) {
  const [visibility, setVisibility] = useState(false);
  const { info, title } = item;
  return (
    <div className="up" onClick={() => setVisibility(!visibility)}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: "600" }}>{title}</div>
        {visibility ? <GrFormSubtract /> : <GrFormAdd />}
      </div>
      <div
        style={{
          display: visibility ? "block" : "none",
          textAlign: "left",
          marginTop: "1rem",
        }}
      >
        {info}
      </div>
    </div>
  );
}

export default Component;
