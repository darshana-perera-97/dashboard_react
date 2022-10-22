import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Persontage(prop) {
  const [t, setT] = React.useState([0, 0]);
  React.useEffect(() => {
    // console.log(t);
    if (t.length > 1) {
      t.shift();
    }
  }, [t]);
  React.useEffect(() => {
    setT(t.concat(prop.data));
  }, [prop]);
  return (
    <div
      style={{
        margin: "15px 30px",
        border: "2px solid #8D8D8D69",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <p style={{ color: "#035aa1", fontSize: "30px", marginRight: "10px" }}>
          Current Value : {t[1]}
        </p>
        <CircularProgress variant="determinate" value={t[1]} />
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ color: "#035aa1", fontSize: "30px", marginRight: "10px" }}>
          Previous Value : {t[0]}
        </p>
        <CircularProgress variant="determinate" value={t[0]} />
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ color: "#035aa1", fontSize: "30px", marginRight: "10px" }}>
          Value Change : {t[0] - t[1]}
        </p>
        <CircularProgress variant="determinate" value={t[0] - t[1]} />
      </div>
    </div>
  );
}
