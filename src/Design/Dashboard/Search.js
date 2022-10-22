import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  return (
    <div
      style={{ background: "#035aa1", padding: "5px 20px", display: "flex" }}
    >
      <input size="50" style={{ outline: "none", padding: "4px 8px" }} />
      <select style={{ outline: "none", padding: "4px 15px" }}>
        <option value="volvo">All Items</option>
        <option value="saab">All Catogeries</option>
        <option value="opel">Employees</option>
        <option value="audi">Customrs</option>
        <option value="audi">Customrs Feedbacks</option>
        <option value="audi">Reviews</option>
      </select>
      <button
        style={{
          background: "#ffc000",
          padding: "0px 10px",
          fontSize: "16px",
          color: "black",
          outline: "none",
          border: "none",
        }}
      >
        Search
      </button>
      <p style={{ paddingLeft: "30px",color: "#FFFFFFA6" }}>
        38,988 of 40,000 metric credits left !
      </p>
    </div>
  );
}
