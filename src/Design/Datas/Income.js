import React from "react";
import SingleIncome from "./SingleIncome";

export default function Income() {
  const incomes = ["Income", "Cost Amount", "Profit", "Exports"];
  return (
    <div style={{ padding: "10px 30px", display: "flex" }}>
      {incomes.map((val, key) => {
        return <SingleIncome val={val} key={key} index={key} />;
      })}
    </div>
  );
}
