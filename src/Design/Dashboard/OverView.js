import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function OverView() {
  const data = [
    "Dashboard",
    "All Records",
    "Income",
    "Search",
    "Visits",
    "Reaches",
    "Ranks",
  ];
  const dataList = [10, 55, 45, 89, 75];
  return (
    <div
      style={{
        background: "#E0DFDF",
        width: "10%",
        height: "89vh",
        padding: "10px 20px",
      }}
    >
      <p
        style={{
          color: "#ffc000",
          fontSize: "20px",
          textShadow: "1px 1px 2px #0000008E",
        }}
      >
        OverView
      </p>
      <p style={{ marginTop: "15px", fontWeight: "600", fontSize: "18px" }}>
        Flatforms
      </p>
      <div style={{ margin: "3px 5px" }}>
        {data.map((val, key) => {
          return (
            <p
              key={key}
              style={{
                fontWeight: "400",
                fontSize: "17px",
                color: "#035aa1",
                cursor: "help",
              }}
            >
              {val}
            </p>
          );
        })}
      </div>
      <p style={{ marginTop: "15px", fontWeight: "600", fontSize: "18px" }}>
        Data Show
      </p>
      <div style={{ margin: "3px 5px" }}>
        {dataList.map((val, key) => {
          return (
            <div key={key}>
              {/* <p>{val}</p> */}
              <LinearProgress
                variant="determinate"
                value={val}
                style={{ marginTop: "8px", height: "10px" }}
              />
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
