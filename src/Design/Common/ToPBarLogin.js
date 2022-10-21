import React from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

export default function ToPBarLogin() {
  return (
    <div
      style={{
        background: "#035aa1",
        padding: "10px 25px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <p style={{ color: "#ffc000", fontSize: "23px" }}>Da</p>
        <p style={{ color: "white", fontSize: "23px" }}>shboard</p>
      </div>
      <div>
        <button
          style={{ background: "none", border: "none" }}
          onClick={() => {
            window.alert("Showing the all applications");
          }}
        >
          <AiTwotoneAppstore style={{ fontSize: "30px", color: "white",opacity:"0.8" }} />
        </button>
        <button
          style={{ background: "none", border: "none" }}
          onClick={() => {
            window.alert("Showing the mails");
          }}
        >
          <AiFillMail style={{ fontSize: "30px", color: "white",opacity:"0.8" }} />
        </button>
        <button
          style={{ background: "none", border: "none" }}
          onClick={() => {
            window.alert("Showing the user profile");
          }}
        >
          <AiOutlineUser style={{ fontSize: "30px", color: "white",opacity:"0.8" }} />
        </button>
      </div>
    </div>
  );
}
