import React from "react";

export default function Charts(prop) {
  const t = prop.data + "%";
  return (
    <div style={{ padding: "10px 5px", height: "210px" }}>
      <p style={{ background: "red", height: t, padding: "2px 5px" }}>
        {prop.data > 9 ? prop.data : "0" + prop.data}
      </p>
    </div>
  );
}
