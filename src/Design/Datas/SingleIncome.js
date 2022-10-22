import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function SingleIncome(prop) {
  const clrs = ["red", "darkblue", "green", "purple", "darkyellow"];
  const [clr, setClr] = React.useState(["red", "darkblue", "green", "purple"]);
  setTimeout(() => {
    setClr([
      clrs[Math.round(Math.random() * 4)],
      clrs[Math.round(Math.random() * 4)],
      clrs[Math.round(Math.random() * 4)],
      clrs[Math.round(Math.random() * 4)],
    ]);
  }, 5000);
  return (
    <div
      style={{
        background: clr[1],
        width: "20%",
        margin: "0% 2.5%",
        padding: "20px 10px",
      }}
    >
      <p style={{ color: "white", fontSize: "22px", textAlign: "center" }}>
        {prop.val}
      </p>
      {Math.round(Math.random() * 4) > 2 ? (
        <p style={{ color: "white", fontSize: "50px", textAlign: "center" }}>
          <AiFillCaretDown /> <span style={{ fontSize: "30px" }}>Down</span>
        </p>
      ) : (
        <p style={{ color: "white", fontSize: "50px", textAlign: "center" }}>
          <AiFillCaretUp /> <span style={{ fontSize: "30px" }}>Up</span>
        </p>
      )}
    </div>
  );
}
