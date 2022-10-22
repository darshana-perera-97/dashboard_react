import React from "react";

export default function DataView(prop) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "5px solid #797979",
        padding: "20px",
        borderRadius: "40px",
      }}
    >
      <p style={{ textAlign: "center", fontSize: "20px" }}>Income</p>
      <p
        style={{
          fontSize: "130px",
          textAlign: "center",
          margin: "-20px",
          color: "#ffc000",
        }}
      >
        {prop.data > 9 ? prop.data : "0"+prop.data}
      </p>
      <p style={{ textAlign: "center", fontSize: "15px" }}>
        Updating for every 10 seconds
      </p>
    </div>
  );
}
