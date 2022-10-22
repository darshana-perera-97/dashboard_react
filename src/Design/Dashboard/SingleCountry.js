import React from "react";

export default function SingleCountry(prop) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p
        style={{
          fontWeight: "400",
          fontSize: "17px",
          color: "#035aa1",
          cursor: "help",
          margin: "0px 15px",
          paddingRight: "20px",
        }}
      >
        {prop.val}
      </p>
      {/* <p>{Math.round(Math.random()*1000000)}</p> */}
      {Math.round(Math.random() * 100000) > 30000 ? (
        <p style={{ color: "black" }}>{Math.round(Math.random() * 1000000)}</p>
      ) : (
        <p style={{ color: "red" }}>{Math.round(Math.random() * 1000000)}</p>
      )}
    </div>
  );
}
