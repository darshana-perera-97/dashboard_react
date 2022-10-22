import React from "react";

export default function LinkSet() {
  const linkSet = ["Dashboard", "Alerts", "Sites", "Content", "Explorer"];
  return (
    <div style={{ background: "#035aa1", display: "flex" }}>
      {linkSet.map((val, key) => {
        return (
          <a href="/" key={key}>
            <p
              style={{
                color: "#FFFAFAAB",
                marginTop: "-15px",
                marginLeft: "20px",
                fontSize: "18px",
              }}
            >
              {val}
            </p>
          </a>
        );
      })}
    </div>
  );
}
