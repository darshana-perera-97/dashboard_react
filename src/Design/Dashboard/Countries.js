import React from "react";
import SingleCountry from "./SingleCountry";

export default function Countries() {
  const countries = [
    "Sri Lanka",
    "India",
    "Pakistan",
    "England",
    "Japan",
    "Poland",
    "Netherland"
  ];
  return (
    <div
      style={{
        height: "200px",
        border: "5px solid #797979",
        padding: "20px",
        borderRadius: "40px",
        marginLeft: "40px",
        width: "300px",
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px" }}>
        Recent Reaches
      </p>
      <div>
        {countries.map((val, key) => {
          return <SingleCountry val={val} key={key} />;
        })}
      </div>
    </div>
  );
}
